import { Badge } from "@/components/badge";
import { BlogCard } from "@/components/blog.card";
import type { TMetadata } from "@/components/content-hub";

export type BlogPostGridProps = {
  metadatas: TMetadata[];
};

export const BlogPostGrid = (props: BlogPostGridProps) => {
  const formattedMetadatas = props.metadatas.map((metadata) => {
    const { title } = metadata;
    const tagCollection = metadata.tags.split(",");
    const date = metadata.date.replaceAll("/", " ");
    const url = `/blog/${metadata.url}`;

    return { title, tagCollection, date, url };
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {formattedMetadatas.map(({ url, date, tagCollection, title }) => (
        <BlogCard key={title} url={url} date={date} title={title}>
          {tagCollection.map((tag) => (
            <Badge key={`${title}-${tag}`} variant="inactive" size="sm">
              {tag}
            </Badge>
          ))}
        </BlogCard>
      ))}
      );
    </div>
  );
};

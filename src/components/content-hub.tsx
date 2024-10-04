"use client";
import { Badge, TBadge } from "@/components/badge";
import { BlogPostGrid } from "@/components/blog-post-grid";
import { MouseEventHandler, useMemo, useState } from "react";

export type TMetadata = {
  title: string;
  date: string;
  tags: string;
  url: string;
};

export type ContentHubProps = {
  metadatas: TMetadata[];
};

export const ContentHub = ({ metadatas }: ContentHubProps) => {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const tags = useMemo(() => {
    const tagSet = new Set<string>();
    for (const metadata of metadatas) {
      const commaSeparatedTags = metadata.tags;
      for (const tag of commaSeparatedTags.split(",")) tagSet.add(tag);
    }
    return Array.from(tagSet);
  }, [metadatas]);

  const tagButtonAction: MouseEventHandler<HTMLButtonElement> = (e) => {
    const element = e.currentTarget.firstElementChild!;
    const tag = element.textContent!;
    const variant = element.getAttribute("variant") as TBadge["variant"];
    if (variant === "inactive") {
      setActiveTags((prev) => [...prev, tag]);
    } else {
      setActiveTags((prev) => prev.filter((prevTag) => prevTag !== tag));
    }
  };

  const filteredMetadatas =
    activeTags.length === 0
      ? metadatas
      : metadatas.filter((metadata) => {
          const tags = metadata.tags.split(",");
          const numberOfActiveTags = activeTags.filter(
            (activeTag) => tags.indexOf(activeTag) !== -1,
          ).length;
          return numberOfActiveTags > 0;
        });

  return (
    <>
      <div className="flex flex-wrap w-full gap-3 mb-12">
        {tags.map((tag) => (
          <button key={tag} onClick={tagButtonAction}>
            <Badge
              key={tag}
              variant={activeTags.includes(tag) ? "active" : "inactive"}
              size="md"
            >
              {tag}
            </Badge>
          </button>
        ))}
      </div>
      <BlogPostGrid metadatas={filteredMetadatas} />
    </>
  );
};

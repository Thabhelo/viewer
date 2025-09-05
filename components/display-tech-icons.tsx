import Image from 'next/image';
import { cn } from '@/lib/utils';
import { TechIconProps } from '@/types';
import { getTechLogos } from '@/lib/utils';

export default async function DisplayTechIcons({ techStack }: TechIconProps) {
  const techIcons = await getTechLogos(techStack);

  return (
    <div className="flex flex-row">
      {techIcons.slice(0, 3).map((icon, index) => (
        <div
          key={icon.tech}
          className={cn(
            "relative group bg-slate-300 dark:bg-slate-700 rounded-full p-2 flex items-center justify-center",
            index >= 1 && "-ml-3"
          )}
        >
          <span className="tech-tooltip">{icon.tech}</span>
          <Image
            src={icon.url}
            alt={icon.tech}
            width={100}
            height={100}
            className="size-5"
          />
        </div>
      ))}
    </div>
  );
}

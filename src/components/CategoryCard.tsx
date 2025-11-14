import { Link } from "react-router-dom";

interface CategoryCardProps {
  image: string;
  title: string;
  itemCount: number;
  href?: string;
}

export const CategoryCard = ({ image, title, itemCount, href = "#" }: CategoryCardProps) => {
  return (
    <Link to={href}>
      <div className="group bg-card rounded-lg border p-3 hover:shadow-lg hover:border-primary transition-all text-center">
        <div className="aspect-square mb-2 overflow-hidden rounded-md bg-muted flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 className="font-semibold text-sm mb-1">{title}</h3>
        <p className="text-xs text-muted-foreground">{itemCount} Items</p>
      </div>
    </Link>
  );
};

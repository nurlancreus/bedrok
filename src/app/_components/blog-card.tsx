import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

type BlogCardProps = {
  image: string;
  title: string;
  category: "entrepreneurship" | "creator" | "tech";
  created: Date;
};

export default function BlogCard({
  image,
  title,
  category,
  created,
}: BlogCardProps) {
    
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Category</p>
        <h4 className="text-3xl">
          7 Things about web design your boss wants you to know
        </h4>
      </CardContent>
    </Card>
  );
}

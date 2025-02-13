import Image from "next/image"
import Link from "next/link"
import "./loading"
import { formatDistanceToNow } from "date-fns"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Sustainable Transportation",
    excerpt: "Exploring innovative approaches to eco-friendly public transit and infrastructure design.",
    date: new Date("2024-01-15"),
    image: "/blog1.jpg",
    author: "John Smith",
    category: "Sustainability",
  }

  const posts = [
    {
      title: "Modern Bus Terminal Design Trends 2024",
      excerpt: "Discover the latest trends in bus terminal architecture and passenger experience design.",
      date: new Date("2024-01-10"),
      image: "/proj 2.jpg",
      author: "Sarah Johnson",
      category: "Design Trends",
    },
    {
      title: "Smart Transit Hubs: The Next Generation",
      excerpt: "How technology is reshaping the future of public transportation infrastructure.",
      date: new Date("2024-01-05"),
      image: "/proj 1.jpg",
      author: "Michael Brown",
      category: "Technology",
    },
    {
      title: "Urban Planning for Better Transit Systems",
      excerpt: "Creating sustainable and efficient public transportation through thoughtful urban design.",
      date: new Date("2024-01-01"),
      image: "/proj 3.jpg",
      author: "Emily Davis",
      category: "Urban Planning",
    },
  ]

  return (
    <div className="container py-12 md:py-24">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Blog</h1>
        <p className="max-w-[700px] text-muted-foreground">
          Insights and updates from the world of transportation architecture and urban design.
        </p>
      </div>

      <div className="mt-12">
        <Card className="overflow-hidden">
          <div className="relative aspect-[2/1] overflow-hidden">
            <Image
              src={featuredPost.image || "/placeholder.svg"}
              alt={featuredPost.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <CardHeader>
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">
                {formatDistanceToNow(featuredPost.date, { addSuffix: true })}
              </p>
              <span className="text-sm text-primary">{featuredPost.category}</span>
            </div>
            <CardTitle className="text-2xl">{featuredPost.title}</CardTitle>
            <CardDescription>By {featuredPost.author}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{featuredPost.excerpt}</p>
            <Button className="mt-4" asChild>
              <Link href="/blog/featured">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Card key={post.title} className="overflow-hidden">
            <div className="relative aspect-[3/2]">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">{formatDistanceToNow(post.date, { addSuffix: true })}</p>
                <span className="text-sm text-primary">{post.category}</span>
              </div>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>By {post.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              <Button variant="link" className="mt-2 p-0" asChild>
                <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, "-")}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


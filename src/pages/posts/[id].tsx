import LayoutWithCommand from '../../components/Layout';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export async function getServerSideProps(context) {
    const { params } = context;
    const { id } = params;

    // Fetch the specific post for the given ID
    const resPost = await fetch(`http://localhost:4000/posts/${id}`);
    const post = await resPost.json();

    // Fetch all posts to include in the layout
    const resPosts = await fetch('http://localhost:4000/posts');
    const posts = await resPosts.json();

    return {
        props: {
            post,
            posts,
        }
    };
}

export default function PostPage({ post, posts }) {
    return (
        <LayoutWithCommand posts={posts}>
            <ScrollArea className="h-full pr-8">
                <Card className="mb-8" key={post.id}>
                    <CardHeader>
                        <CardTitle>{post.title}</CardTitle>
                        <CardDescription>{post.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {post.text}
                    </CardContent>
                </Card>
            </ScrollArea>
        </LayoutWithCommand>
    );
}

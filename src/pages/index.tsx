import LayoutWithCommand from '../components/Layout';

export async function getServerSideProps() {
    const res = await fetch('http://localhost:4000/posts');
    const data = await res.json();

    return {
        props: {
            posts: data,
        }
    };
}

export default function Home({posts}) {
    return (
        <LayoutWithCommand posts={posts}></LayoutWithCommand>
    );
}

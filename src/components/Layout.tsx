import Link from 'next/link';

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {Separator} from "@/components/ui/separator";

const LayoutWithCommand = ({children, posts}) => {
    return (
        <main className="flex h-full">
            <div className="flex w-1/4">
                <Command>
                    <CommandInput placeholder="Search..."/>
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Posts">
                            {
                                posts?.length === 0
                                    ? (<div>...Loading</div>)
                                    : (posts?.map(post => (
                                        <Link href={`/posts/${post.id}`} key={post.id}>
                                            <CommandItem>{post.title}</CommandItem>
                                        </Link>
                                    )))
                            }
                        </CommandGroup>
                    </CommandList>
                </Command>

                <Separator orientation="vertical" className="mr-8"/>
            </div>

            <div className="w-4/5">
                {children}
            </div>
        </main>
    );
}

export default LayoutWithCommand;

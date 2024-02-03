import { Metadata } from "next";

export const metadata: Metadata = {
    title:{
        absolute: "chores",

    },
    description: "My blog",
};

export default function blog() {
    return (
        <div>
            <h1>My blog</h1>
        </div>
    );
}
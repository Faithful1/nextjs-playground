import { notFound } from "next/navigation";

export default function ReviewsList({ params }: {
    params: {
        productId: string
        reviewsId: string
    }
}) {
    // if (params.reviewsId > "100" ) {
    //     return notFound();
    // }
    return (
        <div>
            <h1>product { params.productId }, Review { params.reviewsId }</h1>
        </div>
    );
}
export default function ReviewsList({ params }: {
    params: {
        productId: string
        reviewsId: string
    }
}) {
    return (
        <div>
            <h1>Reviews { params.reviewsId } for product { params.productId }</h1>
        </div>
    );
}
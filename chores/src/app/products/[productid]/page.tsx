export default function ProductDetails({ params }: {
    params: {
        productid: string
    };
}) {
    return (
        <div>
            <h1>Details about product { params.productid }</h1>
        </div>
    );
}
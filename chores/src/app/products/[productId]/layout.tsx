export default function ProductDetails({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>Product Details</h1>
      <p>{children}</p>
    </div>
  );
}

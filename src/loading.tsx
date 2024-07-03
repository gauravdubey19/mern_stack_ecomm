export default function Loading() {
  return (
    <>
      <div className="w-screen h-[58vh] flex-center overflow-hidden">
        <img
          src="/assets/loadingCart.gif"
          alt="loading..."
          loading="eager"
          className="w-full lg:w-[40%] h-[70%] lg:h-full"
        />
      </div>
    </>
  );
}

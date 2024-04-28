export default function Home() {
  return (
    <main>
      <div className="home">
        <figure>
          <img
            src="https://static.octopuscdn.com/logos/logo.svg"
            alt="Octopus Energy Logo"
          />
        </figure>
        <h1 className="font-bold text-3xl my-10">Welcome to the Octopus Energy Frontend code test!</h1>
        <p>
          Get started by visiting the <code className="font-mono ml-1 text-sm">/product</code> URL and editing{" "}
          <code className="font-mono ml-1 text-sm">client/pages/product.js</code>
        </p>
      </div>
    </main>
  );
}

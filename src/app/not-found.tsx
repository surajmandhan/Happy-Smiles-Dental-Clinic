import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <section>
        <div className="animation">
          <h2>4</h2>
          <div className="scene">
            <div className="moon"></div>
            <ul className="stars">
              {Array.from({ length: 30 }).map((_, i) => (
                <li key={i}></li>
              ))}
            </ul>
            <ul className="clouds">
              {Array.from({ length: 6 }).map((_, i) => (
                <li key={i}></li>
              ))}
            </ul>
            <div className="ghost">
              <div className="ghost__tooltip">Boo!</div>
              <div className="ghost__eyes">
                <div className="eye"></div>
                <div className="eye"></div>
              </div>
              <div className="ghost__mouth"></div>
              <div className="ghost__tail"></div>
            </div>
          </div>
          <h2>4</h2>
        </div>
        <div className="not-found">
          <h4>Sorry, the page not found</h4>
          <Link href="/" className="go-home-link">
            Go back to Homepage
          </Link>
        </div>
      </section>
    </div>
  );
}
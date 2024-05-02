import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link href="/">Return to the homepage</Link>
        </div>
    );
};

export default NotFoundPage;
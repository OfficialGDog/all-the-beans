import { Button } from "@carbon/react";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import styles from "./NotFoundPage.module.scss";

export default function NotFoundPage() {
  const navigate = useNavigate();
  useDocumentTitle("404 Not Found");

  return (
    <main className={styles.container}>
      <h1>404</h1>
      <p>The page you're looking for could not be found.</p>
      <Button kind="primary" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </main>
  );
}
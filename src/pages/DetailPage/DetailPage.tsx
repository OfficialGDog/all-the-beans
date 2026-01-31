import { useParams } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useNavigate } from "react-router-dom";
import { Button } from "@carbon/react";
import BeanDetail from "../../components/BeanDetail/BeanDetail";
import { BEANS } from "../../data/beans";
import styles from "./DetailPage.module.scss";

function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const bean = BEANS.find((b) => b._id === id);
  useDocumentTitle(`${bean ? bean.Name : "Bean Not Found"} - All The Beans`);

  return (
    <main className={styles.container}>
      {bean ? (<BeanDetail bean={bean} />) : (
        <p>This product isn't available anymore</p> )}
      <br />
      <Button kind="primary" onClick={() => navigate("/")}>
        Back to Home
      </Button>
    </main>
  );
}

export default DetailPage;

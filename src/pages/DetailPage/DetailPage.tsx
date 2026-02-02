import { useParams } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { useNavigate } from "react-router-dom";
import { Button } from "@carbon/react";
import BeanDetail from "../../components/BeanDetail/BeanDetail";
import { BEANS } from "../../data/beans";
import type { CoffeeBeanApi } from "../../types/coffeeBean";
import styles from "./DetailPage.module.scss";

type DetailPageProps = {
  onAddToOrder: (bean: CoffeeBeanApi) => void;
};

function DetailPage({ onAddToOrder }: DetailPageProps) {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const bean = BEANS.find((b) => b._id === id);
  useDocumentTitle(`${bean ? bean.Name : "Bean Not Found"} - All The Beans`);

  return (
    <main className={styles.container}>
      {bean ? (<BeanDetail bean={bean} onAddToOrder={onAddToOrder}/>) : (
        <>
          <p>This product isn't available anymore</p>
          <Button kind="primary" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </>
      )}
    </main>
  );
}

export default DetailPage;

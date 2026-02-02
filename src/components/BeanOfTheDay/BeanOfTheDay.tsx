import styles from "./BeanOfTheDay.module.scss";

type BeanOfTheDayProps = {
  className?: string;
};

export default function BeanOfTheDay({className}: BeanOfTheDayProps) {
  return (
    <span className={`${styles.badge} ${styles[className || '']}`}>Bean of the Day</span>
  )
}
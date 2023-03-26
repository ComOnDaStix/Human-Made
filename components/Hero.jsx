import styles from "../styles/Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.heroImgContainer}>
      <Image src={"/hero1.webp"} width={2000} height={1125} />
      <Image src={"/hero2.webp"} width={2000} height={1125} />
    </div>
  );
};

export default Hero;

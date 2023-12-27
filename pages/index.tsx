import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/home.png"
              width={860}
              height={540}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Areon Gaming Hub
                </span>
                <br />
              </h1>
              <h2>
                Trade Unique Gaming NFTs on Areon s Premier Marketplace 🌐
              </h2>
              <br />
            </div>
          </div>
        </div>
        <div className="text-center mx-56">
            <p className={styles.heroSubtitle}>
              Seamlessly trade, collect, and explore unique gaming NFTs while having access to comprehensive transaction history. Immerse yourself in the future of gaming and unlock the true potential of digital ownership.
            </p>
                <div className={styles.heroCtaContainer}>
                  <Link className={styles.heroCta} href="/buy">
                    Get Started
                  </Link>
                  <Link
                    className={styles.secondaryCta}
                    href="https://github.com/kamalbuilds/areongaminghub"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
      </div>
    </div>
  );
};

export default Home;

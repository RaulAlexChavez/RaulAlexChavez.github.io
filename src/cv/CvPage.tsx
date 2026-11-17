import React, { useEffect, useState } from "react";
import Cv, { CvVariant } from "./Cv";
import { cvData } from "./cvData";
import styles from "./Cv.module.css";

const CvPage = (): JSX.Element => {
  const [variant, setVariant] = useState<CvVariant>("ats");
  const [printRequested, setPrintRequested] = useState(false);

  useEffect(() => {
    if (printRequested && variant === "ats") {
      setPrintRequested(false);
      window.print();
    }
  }, [printRequested, variant]);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Raúl Alejandro Chávez Valenzuela - CV";
    return () => { document.title = originalTitle; };
  }, []);

  const printAtsVersion = (): void => {
    if (variant === "ats") {
      window.print();
      return;
    }
    setVariant("ats");
    setPrintRequested(true);
  };

  return (
    <main className={styles.page}>
      <nav className={styles.toolbar} aria-label={cvData.controls.switchVariant}>
        <div className={styles.variantButtons}>
          <button type="button" aria-pressed={variant === "ats"} onClick={() => setVariant("ats")}>
            {cvData.controls.ats}
          </button>
          <button type="button" aria-pressed={variant === "designed"} onClick={() => setVariant("designed")}>
            {cvData.controls.designed}
          </button>
        </div>
        {/* In Chrome choose Save as PDF; verify the text layer by selecting all and copying from the PDF. */}
        <button type="button" className={styles.printButton} onClick={printAtsVersion}>
          {cvData.controls.print}
        </button>
        <p>{cvData.controls.printHint}</p>
      </nav>
      <Cv data={cvData} variant={variant} />
    </main>
  );
};

export default CvPage;
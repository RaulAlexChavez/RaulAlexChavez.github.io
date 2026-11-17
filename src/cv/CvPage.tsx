import React, { useEffect, useState } from "react";
import Cv, { CvVariant } from "./Cv";
import { CvData } from "./cvData";
import styles from "./Cv.module.css";

interface CvPageProps {
  data: CvData;
}

const CvPage = ({ data }: CvPageProps): JSX.Element => {
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
    document.title = data.documentTitle;
    return () => { document.title = originalTitle; };
  }, [data.documentTitle]);

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
      <nav className={styles.toolbar} aria-label={data.controls.switchVariant}>
        <div className={styles.variantButtons}>
          <button type="button" aria-pressed={variant === "ats"} onClick={() => setVariant("ats")}>
            {data.controls.ats}
          </button>
          <button type="button" aria-pressed={variant === "designed"} onClick={() => setVariant("designed")}>
            {data.controls.designed}
          </button>
        </div>
        {/* In Chrome choose Save as PDF; verify the text layer by selecting all and copying from the PDF. */}
        <button type="button" className={styles.printButton} onClick={printAtsVersion}>
          {data.controls.print}
        </button>
        <p>{data.controls.printHint}</p>
      </nav>
      <Cv data={data} variant={variant} />
    </main>
  );
};

export default CvPage;
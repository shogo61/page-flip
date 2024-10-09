import { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import styles from "./books.module.scss"

const Book = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      {/* 公式でイシュー化；https://github.com/Nodlik/react-pageflip/issues/21*/}
      {/* @ts-ignore */}
      <HTMLFlipBook
        width={400}
        height={600}
      >
        <div key="1" className={styles.page}>
          <p>111</p>
        </div>
        <div key="2" className={styles.page}>
          <p>222</p>
        </div>
        <div key="2" className={styles.page}>
          <p>333</p>
        </div>
      </HTMLFlipBook>
      <button onClick={handlePreviousPage}>前のページ</button>
      <button onClick={handleNextPage}>次のページ</button>
    </div>
  );
};

export default Book;
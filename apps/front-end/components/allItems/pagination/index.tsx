import { useMemo } from 'react';

import styles from './pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  numberOfPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination = ({
  currentPage,
  numberOfPages,
  onPageChange,
}: PaginationProps) => {
  const pageNumbers: number[] = useMemo(
    () => Array.from({ length: numberOfPages }, (_, i) => 1 + i),
    [numberOfPages]
  );

  return (
    <section className={styles.container}>
      {pageNumbers.map((pageNumber) => {
        return (
          <button
            className={pageNumber === currentPage ? styles.activeButton : ''}
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
    </section>
  );
};

export default Pagination;

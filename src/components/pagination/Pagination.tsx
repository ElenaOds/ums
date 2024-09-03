import { PaginationProps } from '../../types';
import { PaginationWrapper, PageNumBtn, PageBtn } from './Pagination.styled';

const Pagination: React.FC<PaginationProps> = (
  {page, 
    handleClickNext, 
    handleClickPrevious,
    handlePageSet, 
    usersPerPage,
    totalUsers
   }) => {
    const activePage = page || 1;
    const totalPages = Math.ceil(totalUsers / usersPerPage);

    const pages = Array.from({length: totalPages}, (_, index) => index + 1);
  return (
    <PaginationWrapper>
        <PageBtn type='button' onClick={handleClickPrevious} disabled={page === 1}>Previous</PageBtn>

        {pages.map((pageNum) => (
        <PageNumBtn
            key={pageNum}
            onClick={() => handlePageSet(pageNum)}
            style={{ 
                backgroundColor: activePage === pageNum  ? '#1D4ED8' : '#6B7280', 
            }}
            >
          {pageNum}
        </PageNumBtn>
        ))} 
        <PageBtn type='button' onClick={handleClickNext} disabled={page === totalPages}>Next</PageBtn> 
    </PaginationWrapper>
  )
}

export default Pagination

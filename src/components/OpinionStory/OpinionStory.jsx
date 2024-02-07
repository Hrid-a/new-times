import styled from 'styled-components';
import { QUERIES } from '../../utils/constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Link href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  &:not(:last-of-type){
    padding-bottom: 16px;
    border-bottom: 2px solid var(--color-gray-300);

    @media ${QUERIES.tabletOnly}{
      border-bottom: 0;
    }
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  gap: 16px;
  @media ${QUERIES.tabletOnly}{
    flex-direction: column;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  order:2;
  @media ${QUERIES.tabletOnly}{
    order: 0;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-normal);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-normal);
  line-height: 1.3;
`;

export default OpinionStory;

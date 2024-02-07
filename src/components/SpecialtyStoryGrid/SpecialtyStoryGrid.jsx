import styled from 'styled-components';

import { MARKET_DATA, SPORTS_STORIES } from '../../utils/data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../utils/constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  margin-bottom: 48px;
  grid-template-areas: 
    'market'
    'sports'
  ;

  @media ${QUERIES.laptopAndUp}{
    grid-template-areas: 
      'market  sports';
    ;
  }
`;

const MarketsSection = styled.section`
  grid-area: market;
  min-width:585px;
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 183px));
  gap: 16px;
`;

const SportsSection = styled.section`
  grid-area: sports;
  overflow: hidden;
`;

const SportsStories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  & > * {
    flex: 1;
    min-width: 183px;
  }

  @media ${QUERIES.tabletAndUp}{
    flex-wrap: nowrap;
    & > * {
      min-width: 220px;
    }
  }
`;

export default SpecialtyStoryGrid;

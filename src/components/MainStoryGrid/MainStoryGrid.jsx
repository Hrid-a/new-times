import styled from 'styled-components';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../utils/data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../utils/constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-top: 48px;
  margin-bottom: 48px;
  font-family: var(font-family-serif);

  @media ${QUERIES.tabletAndUp}{
    grid-template-areas:
    'main-story  main-story main-story secondary-stories'
    'advertisement advertisement advertisement advertisement'
    'opinion-stories opinion-stories  opinion-stories  opinion-stories';
    gap:  48px 16px;
  }

  @media ${QUERIES.laptopAndUp}{
    grid-template-areas:
    'main-story  main-story secondary-stories opinion-stories'
    'main-story main-story  secondary-stories  opinion-stories'
    'main-story main-story advertisement advertisement';
  }

`;

const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.laptopAndUp}{
    border-right: 2px solid var(--color-gray-300);
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  padding-left: 16px;
  @media ${QUERIES.laptopAndUp}{
    border-right: 2px solid var(--color-gray-300);
    padding-right: 16px;
    padding-left: 0;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  padding-block:16px; 
  gap: 16px 0;

  @media ${QUERIES.tabletOnly}{
    flex-direction: row;
    gap: 32px;
    & > * {
      flex: 1;
    }
  }

  
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.laptopAndUp}{
    border-top: 2px solid var(--color-gray-300);
    padding-top: 16px;
  }
`;

export default MainStoryGrid;

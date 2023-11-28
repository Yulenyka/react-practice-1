import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({forbes}) => {
  return   (
      <LeaderBoard>
  <BoardHeader>
    <BoardTitle>
      <TitleTop>Forbes</TitleTop>
      <TitleBottom>Leader board</TitleBottom>
    </BoardTitle>
  </BoardHeader>

  <LeaderBoardProfiles>
        {forbes.map(({
          id,
          avatar,
          name,
          isIncrease,
          capital }) => (
          < ForbesListItem
           key={id}
            avatar={avatar}
            name={name}
            isIncrease={isIncrease}
            capital={capital}
          />
        ))}
  </LeaderBoardProfiles>
</LeaderBoard>
    )
};
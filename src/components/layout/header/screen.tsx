import { HB1 } from '../../../styled/Typography';
import { StyledHeader } from '../styled';

export default ({ title }: { title?: React.ReactNode }) => {
  return (
    // TODO: Back button 추가
    <StyledHeader hasChildren={!!title}>
      <HB1>{title}</HB1>
    </StyledHeader>
  );
};

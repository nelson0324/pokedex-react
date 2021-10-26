import { SearchInput } from "../../components/SearchInput";
import { Container, Content, SearchSection, Title, Grid } from "./Home.styles";
import { HOME_MENU } from "../../constants";
import { Card } from "../../components/Card";
export const Home = () => {
  return (
    <Container>
      <Content>
        <SearchSection>
          <Title>What Pokemon are you loking for?</Title>
          <SearchInput />
          <Grid>
            {HOME_MENU.map((menuOption) => (
              <Card key={menuOption.text} {...menuOption}>
                {menuOption.text}
              </Card>
            ))}
          </Grid>
        </SearchSection>
      </Content>
    </Container>
  );
};

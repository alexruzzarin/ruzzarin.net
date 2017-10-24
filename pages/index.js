import {
  Header,
  HeaderIcon,
  HeaderLink,
  Title,
  Main,
  Person,
  About,
  Name,
  Social,
  Photo
} from '../components/styled';
import { envelope } from 'react-icons-kit/fa/envelope';

const people = [
  {
    key: 1,
    name: 'Alex Ruzzarin',
    photos: [
      'https://placeimg.com/640/480/people',
      'https://placeimg.com/640/480/nature',
      'https://placeimg.com/640/480/tech'
    ]
  },
  {
    key: 2,
    name: 'Alan Ruzzarin',
    photos: [
      'https://placeimg.com/640/480/nature',
      'https://placeimg.com/640/480/people',
      'https://placeimg.com/640/480/tech'
    ]
  },
  {
    key: 3,
    name: 'Alex Ruzzarin',
    photos: [
      'https://placeimg.com/640/480/people',
      'https://placeimg.com/640/480/nature',
      'https://placeimg.com/640/480/tech'
    ]
  },
  {
    key: 4,
    name: 'Alan Ruzzarin',
    photos: [
      'https://placeimg.com/640/480/nature',
      'https://placeimg.com/640/480/people',
      'https://placeimg.com/640/480/tech'
    ]
  }
];

export default () => [
  <Header key="header">
    <Title>Família Ruzzarin</Title>
    <HeaderLink href="http://mail.ruzzarin.net">
      <HeaderIcon icon={envelope} />
    </HeaderLink>
  </Header>,
  <Main key="main">
    {people.map(person => (
      <Person key={person.key}>
        {person.photos.map(photo => <Photo key={photo} src={photo} />)}
        <About>
          <Name>{person.name}</Name>
          <Social>Here</Social>
        </About>
      </Person>
    ))}
  </Main>
];

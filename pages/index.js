import {
  Header,
  HeaderIcon,
  HeaderLink,
  Title,
  Main,
  Person,
  About,
  Name,
  Photo,
  Social,
  SocialLink,
  SocialIcon
} from '../components/styled';
import {
  envelope,
  facebookSquare,
  twitterSquare,
  instagram,
  linkedinSquare,
  githubSquare
} from 'react-icons-kit/fa';

// const titles = ['Família Ruzzarin', 'Ruzzarin Family', 'Familia Ruzzarin'];

const people = [
  {
    key: 'alex',
    name: 'Alex Ruzzarin',
    photos: [
      'static/alex/photo-1.jpg',
      'static/alex/photo-2.jpg',
      'static/alex/photo-3.jpg'
    ],
    links: [
      {
        icon: facebookSquare,
        title: 'Facebook',
        url: 'https://facebook.com/alex.ruzzarin'
      },
      {
        icon: twitterSquare,
        title: 'Twitter',
        url: 'https://twitter.com/alexruzzarin'
      },
      {
        icon: instagram,
        title: 'Instagram',
        url: 'https://www.instagram.com/alexruzzarin/'
      },
      {
        icon: linkedinSquare,
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/alexruzzarin/'
      },
      {
        icon: githubSquare,
        title: 'GitHub',
        url: 'https://github.com/alexruzzarin'
      },
      {
        icon: envelope,
        title: 'Mail',
        url: 'https://goo.gl/forms/DsHKTp2WpkvfnYiY2'
      }
    ]
  },
  {
    key: 'alan',
    name: 'Alan Ruzzarin',
    photos: [
      'static/alan/photo-1.jpg',
      'static/alan/photo-2.jpg',
      'static/alan/photo-3.jpg'
    ],
    links: [
      {
        icon: facebookSquare,
        title: 'Facebook',
        url: 'https://www.facebook.com/alan.ruzzarin'
      },
      {
        icon: envelope,
        title: 'Mail',
        url:
          'http://www.google.com/recaptcha/mailhide/d?k=01HPRzQlJD1pWB-oxgYmFoQQ==&c=wxHY8BJ9KO2_yOphvjZJEpv4ZVa7CN1lllhtFOJVU-M='
      }
    ]
  },
  {
    key: 'alexandre',
    name: 'Alexandre Ruzzarin',
    photos: [
      'static/alexandre/photo-1.jpg',
      'static/alexandre/photo-2.jpg',
      'static/alexandre/photo-3.jpg'
    ],
    links: [
      {
        icon: envelope,
        title: 'Mail',
        url:
          'http://www.google.com/recaptcha/mailhide/d?k=017GxnxUvFE4mdviMhPtoSuw==&c=rRaujPP63c1-oGA74eoVQTV6t-Y2DE5CQZFti5hSSRc='
      }
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
      <Person key={person.key} id={person.key}>
        {person.photos.map(photo => <Photo key={photo} src={photo} />)}
        <About>
          <Name>{person.name}</Name>
          <Social>
            {person.links &&
              person.links.map(link => (
                <SocialLink
                  key={link.url}
                  title={link.title}
                  href={link.url}
                  target="_blank"
                >
                  <SocialIcon icon={link.icon} />
                </SocialLink>
              ))}
          </Social>
        </About>
      </Person>
    ))}
  </Main>
];

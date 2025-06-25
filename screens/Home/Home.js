import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from '../../components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import style from './style';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import { NavigationContainer } from '@react-navigation/native';

function Home() {
  const userStories = [
    {
      firstName: 'John',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Emily',
      id: 2,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Michael',
      id: 3,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Sophia',
      id: 4,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'David',
      id: 5,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Olivia',
      id: 6,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Liam',
      id: 7,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Ava',
      id: 8,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Noah',
      id: 9,
      profileImage: require('../../assets/images/default_profile.png'),
    },
  ];

  const userPosts = [
    {
      firstName: 'John',
      lastName: 'Doe',
      location: 'New York, USA',
      likes: 120,
      comments: 45,
      bookmarks: 30,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 1,
    },
    {
      firstName: 'Emily',
      lastName: 'Smith',
      location: 'Los Angeles, USA',
      likes: 98,
      comments: 32,
      bookmarks: 22,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 2,
    },
    {
      firstName: 'Michael',
      lastName: 'Johnson',
      location: 'Chicago, USA',
      likes: 150,
      comments: 60,
      bookmarks: 40,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 3,
    },
    {
      firstName: 'Sophia',
      lastName: 'Williams',
      location: 'London, UK',
      likes: 200,
      comments: 80,
      bookmarks: 55,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 4,
    },
    {
      firstName: 'David',
      lastName: 'Brown',
      location: 'Toronto, Canada',
      likes: 75,
      comments: 20,
      bookmarks: 10,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 5,
    },
    {
      firstName: 'Olivia',
      lastName: 'Jones',
      location: 'Sydney, Australia',
      likes: 180,
      comments: 70,
      bookmarks: 50,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 6,
    },
    {
      firstName: 'Liam',
      lastName: 'Garcia',
      location: 'Madrid, Spain',
      likes: 110,
      comments: 38,
      bookmarks: 25,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 7,
    },
    {
      firstName: 'Ava',
      lastName: 'Martinez',
      location: 'Paris, France',
      likes: 95,
      comments: 27,
      bookmarks: 18,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 8,
    },
    {
      firstName: 'Noah',
      lastName: 'Lee',
      location: 'Berlin, Germany',
      likes: 130,
      comments: 50,
      bookmarks: 35,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 9,
    },
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    console.log('currentPage ', currentPage);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <SafeAreaView>
      <View style={style.userPostContainer}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <Title title={`Let's Explore`} />
                <TouchableOpacity style={style.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={20}
                    color={'#898DAE'}
                  />
                  <View style={style.messageNumberContainer}>
                    <Text style={style.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={style.userStoriesContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) return;
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                      console.log(`Getting more user stories... `);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStoriesRenderedData}
                  renderItem={({ item }) => (
                    <UserStory
                      key={item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPosts) {
              return;
            }
            setIsLoadingUserPosts(true);
            console.log(
              'fetching more data for you ',
              userPostsCurrentPage + 1,
            );
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(userPostsCurrentPage + 1);
              setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserPosts(false);
          }}
          data={userPostsRenderedData}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                image={item.image}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
                profileImage={item.profileImage}
                location={item.location}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;

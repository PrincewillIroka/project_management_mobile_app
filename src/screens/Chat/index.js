import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import shortid from 'shortid';
import styles from './chatStyle';
import {TabScreenHeader, EmptyListComponent} from '../../components';
import {AuthContext} from '../../context';

export function Chat({navigation, route}) {
  const selectedMember = route.params;
  const {state, dispatch} = useContext(AuthContext);
  const [data, setData] = useState({
    messages: [
      {
        sender: 'me',
        text: 'What can I do for you ? Please tell me how I can help you ?',
      },
      {
        sender: 'opponent',
        text: 'We sure do! Check it out below.',
        image: 'https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/5ec36523544c771830037859_wfh-drawkit-thumbnail.png',
      },
      {
        sender: 'me',
        text: 'Thanks for sharing.',
      },
      {
        sender: 'opponent',
        text: 'Looking forward to hearing from you.',
      },
      {
        sender: 'me',
        text: `I'll do my best to keep in touch as often as I can.`,
      },
      {
        sender: 'opponent',
        text: 'Cool, see you during our next meeting',
      },
      {
        sender: 'me',
        text: 'Will keep you updated on any new project',
      },
    ],
  });

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const ChatHeader = () => {
    return (
      <View style={styles.chatHeader}>
        <TouchableOpacity
          onPress={() => handleBackButton('Members')}
          style={styles.backButton}>
          <Ionicons name="arrow-back-outline" size={25} color="#000" />
        </TouchableOpacity>
        <Image
          style={styles.selectedMemberPhoto}
          source={{
            uri: selectedMember?.photo,
          }}
        />
        <View style={styles.selectedMemberInfo}>
          <Text style={styles.selectedMemberName}>
            {selectedMember?.name}
          </Text>
          <Text style={styles.selectedMemberLastSeen}>
            Last seen {selectedMember?.lastSeen}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => <ChatHeader />}
        isSearchBtnVisible={false}
        isMoreBtnVisible={true}
      />
      <View style={styles.chatWrapper}>
        {data?.messages?.length ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.messagesSection} key={shortid.generate()}>
              {data?.messages.map(message => (
                <View
                  key={shortid.generate()}
                  style={[
                    styles.singleMessage,
                    message.sender === 'me'
                      ? styles.singleMessageRight
                      : styles.singleMessageLeft,
                  ]}>
                  {message?.text ? (
                    <Text
                      style={[
                        styles.singleMessageText,
                        message.sender === 'me'
                          ? styles.singleMessageTextRight
                          : styles.singleMessageTextLeft,
                      ]}>
                      {message.text}
                    </Text>
                  ) : null}
                  {message?.image ? (
                    <Image
                      style={styles.singleMessageImage}
                      source={{
                        uri: message.image,
                      }}
                    />
                  ) : null}
                </View>
              ))}
            </View>
          </ScrollView>
        ) : (
          <EmptyListComponent />
        )}
        <View style={styles.bottomSection}>
          <TouchableOpacity style={styles.attachmentIconWrapper}>
            <Entypo name="attachment" size={17} color="gray" />
          </TouchableOpacity>
          <TextInput
            placeholder="Type message"
            placeholderTextColor="gray"
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.sendIconWrapper}>
            <Feather name="send" size={17} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

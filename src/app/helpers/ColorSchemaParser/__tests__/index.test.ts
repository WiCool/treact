import linkedParser, { parser } from '..';
import Color from '../color-value';
import { InputPair, merge } from '../map-links';

test('Parser works correctly', () => {
  const result = linkedParser(example);

  expect(result).toMatchSnapshot();
});

test('Parser without linking', () => {
  const result = parser(example);

  expect(result).toMatchSnapshot();
});

test('Should merge InputPair correctly', () => {
  const a: InputPair[] = [
    [
      'someColor',
      [
        new Color([
          127,
          127,
          127,
          255,
        ]),
      ],
    ],
    [
      'callBarUnmuteRipple',
      [
        new Color([
          127,
          127,
          127,
          255,
        ]),
        'shadowFg',
      ],
    ],
  ];

  const b: InputPair[] = [
    [
      'shadowFg',
      [
        new Color([
          0,
          0,
          0,
          24,
        ]),
      ],
    ],
  ];

  const result = merge(a, b);

  expect(result).toMatchSnapshot();
});

test('Should merge InputPair correctly 2', () => {
  const a: InputPair[] = [
    [
      'callBarUnmuteRipple',
      [
        new Color([
          127,
          127,
          127,
          255,
        ]),
        'shadowFg',
      ],
    ],
  ];

  const b: InputPair[] = [
    [
      'callBarUnmuteRipple',
      [
        new Color([
          128,
          128,
          128,
          255,
        ]),
      ],
    ],
    [
      'shadowFg',
      [
        new Color([
          0,
          0,
          0,
          24,
        ]),
      ],
    ],
  ];

  const result = merge(a, b);

  expect(result).toMatchSnapshot();
});

// tslint:disable
const example = `
/*
This file is part of Telegram Desktop,
the official desktop version of Telegram messaging app, see https://telegram.org

Telegram Desktop is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

It is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

In addition, as a special exception, the copyright holders give permission
to link the code of portions of this program with the OpenSSL library.

Full license: https://github.com/telegramdesktop/tdesktop/blob/master/LICENSE
Copyright (c) 2014-2017 John Preston, https://desktop.telegram.org
*/

// basic
windowBg: #ffffff; // white: fallback for background
windowFg: #000000; // black: fallback for text
windowBgOver: #f1f1f1; // light gray: fallback for background with mouse over
windowBgRipple: #e5e5e5; // darker gray: fallback for ripple effect
windowFgOver: windowFg; // black: fallback for text with mouse over
windowSubTextFg: #999999; // gray: fallback for additional text
windowSubTextFgOver: #919191; // darker gray: fallback for additional text with mouse over
windowBoldFg: #222222; // dark gray: fallback for bold text
windowBoldFgOver: #222222; // dark gray: fallback for bold text with mouse over
windowBgActive: #40a7e3; // bright blue: fallback for blue filled active areas
windowFgActive: #ffffff; // white: fallback for text on active areas
windowActiveTextFg: #168acd; // online blue: fallback for active text like online status
windowShadowFg: #000000; // black: fallback for shadow
windowShadowFgFallback: #f1f1f1; // gray: fallback for shadow without opacity

shadowFg: #00000018; // most shadows (including opacity)
slideFadeOutBg: #0000003c; // slide animation (chat to profile) fade out filling
slideFadeOutShadowFg: windowShadowFg; // slide animation (chat to profile) fade out right section shadow

imageBg: #000000; // image background fallback (when photo size is less than minimum allowed)
imageBgTransparent: #ffffff; // image background when displaying an image with opacity where no opacity is needed

// widgets
activeButtonBg: windowBgActive; // default active button background
activeButtonBgOver: #39a5db; // default active button background with mouse over
activeButtonBgRipple: #2095d0; // default active button ripple effect
activeButtonFg: windowFgActive; // default active button text
activeButtonFgOver: activeButtonFg; // default active button text with mouse over
activeButtonSecondaryFg: #cceeff; // default active button additional text (selected messages counter in forward / delete buttons)
activeButtonSecondaryFgOver: activeButtonSecondaryFg; // default active button additional text with mouse over
activeLineFg: #37a1de; // default active line (like code input field bottom border when you log in and field is focused)
activeLineFgError: #e48383; // default active line for error state (like code input field bottom border when you log in and you've entered incorrect code)

lightButtonBg: windowBg; // default light button background (like buttons in boxes)
lightButtonBgOver: #e3f1fa; // default light button background with mouse over
lightButtonBgRipple: #c9e4f6; // default light button ripple effect
lightButtonFg: windowActiveTextFg; // default light button text
lightButtonFgOver: lightButtonFg; // default light button text with mouse over

attentionButtonFg: #d14e4e; // default attention button text (like confirm button on log out)
attentionButtonFgOver: #d14e4e; // default attention button text with mouse over
attentionButtonBgOver: #fcdfde; // default attention button background with mouse over
attentionButtonBgRipple: #f4c3c2; // default attention button ripple effect

outlineButtonBg: windowBg; // default left outlined button background (like shared media links in profiles)
outlineButtonBgOver: lightButtonBgOver; // default left outlined button background with mouse over
outlineButtonOutlineFg: windowBgActive; // default left outlined button left outline border
outlineButtonBgRipple: lightButtonBgRipple; // default left outlined button ripple effect

menuBg: windowBg; // default popup menu background
menuBgOver: windowBgOver; // default popup menu item background with mouse over
menuBgRipple: windowBgRipple; // default popup menu item ripple effect
menuIconFg: #a8a8a8; // default popup menu item icon (like main menu)
menuIconFgOver: #999999; // default popup menu item icon with mouse over
menuSubmenuArrowFg: #373737; // default popup menu submenu arrow icon (like in message field context menu in case of RTL system language)
menuFgDisabled: #cccccc; // default popup menu item disabled text (like unavailable items in message field context menu)
menuSeparatorFg: #f1f1f1; // default popup menu separator (like in message field context menu)

scrollBarBg: #00000053; // default scroll bar current rectangle, the bar itself (like in chats list)
scrollBarBgOver: #0000007a; // default scroll bar current rectangle with mouse over it
scrollBg: #0000001a; // default scroll bar background
scrollBgOver: #0000002c; // default scroll bar background with mouse over the scroll bar

smallCloseIconFg: #c7c7c7; // small X icon (like in Show all sessions box to the right for sessions termination)
smallCloseIconFgOver: #a3a3a3; // small X icon with mouse over

radialFg: windowFgActive; // default radial loader line (like in Media Viewer when loading a photo)
radialBg: #00000056; // default radial loader background (like in Media Viewer when loading a photo)

placeholderFg: windowSubTextFg; // default input field placeholder when field is not focused (like in phone input field when you log in)
placeholderFgActive: #aaaaaa; // default input field placeholder when field is focused
inputBorderFg: #e0e0e0; // default input field bottom border (like in code input field when you log in and field is not focused)
filterInputBorderFg: #54c3f3; // default rounded input field border (like in chats list search field when field is focused)
filterInputActiveBg: windowBg; // default rounded input field active background (like in chats list search field when field is focused)
filterInputInactiveBg: windowBgOver; // default rounded input field inactive background (like in chats list search field when field is inactive)
checkboxFg: #b3b3b3; // default unchecked checkbox rounded rectangle

botKbBg: menuBgOver; // bot keyboard button background
botKbDownBg: menuBgRipple; // bot keyboard button ripple effect
botKbColor: windowBoldFgOver; // bot keyboard button text

sliderBgInactive: #e1eaef; // default slider not active bar (like in Settings when you choose interface scale or custom notifications count)
sliderBgActive: windowBgActive; // default slider active bar (like in Settings when you choose interface scale or custom notifications count)

tooltipBg: #eef2f5; // tooltip background (like when you put mouse over the message timestamp and wait)
tooltipFg: #5d6c80; // tooltip text
tooltipBorderFg: #c9d1db; // tooltip border

// custom title bar for Windows and macOS
titleShadow: #00000003; // one pixel line shadow at the bottom of custom window title
titleBg: windowBgOver; // custom window title background when window is inactive
titleBgActive: titleBg; // custom window title background when window is active
titleButtonBg: titleBg; // custom window title minimize/maximize/restore button background when window is inactive (Windows only)
titleButtonFg: #ababab; // custom window title minimize/maximize/restore button icon when window is inactive (Windows only)
titleButtonBgOver: #e5e5e5; // custom window title minimize/maximize/restore button background with mouse over when window is inactive (Windows only)
titleButtonFgOver: #9a9a9a; // custom window title minimize/maximize/restore button icon with mouse over when window is inactive (Windows only)
titleButtonBgActive: titleButtonBg; // custom window title minimize/maximize/restore button background when window is active (Windows only)
titleButtonFgActive: titleButtonFg; // custom window title minimize/maximize/restore button icon when window is active (Windows only)
titleButtonBgActiveOver: titleButtonBgOver; // custom window title minimize/maximize/restore button background with mouse over when window is active (Windows only)
titleButtonFgActiveOver: titleButtonFgOver; // custom window title minimize/maximize/restore button icon with mouse over when window is active (Windows only)
titleButtonCloseBg: titleButtonBg; // custom window title close button background when window is inactive (Windows only)
titleButtonCloseFg: titleButtonFg; // custom window title close button icon when window is inactive (Windows only)
titleButtonCloseBgOver: #e81123; // custom window title close button background with mouse over when window is inactive (Windows only)
titleButtonCloseFgOver: windowFgActive; // custom window title close button icon with mouse over when window is inactive (Windows only)
titleButtonCloseBgActive: titleButtonCloseBg; // custom window title close button background when window is active (Windows only)
titleButtonCloseFgActive: titleButtonCloseFg; // custom window title close button icon when window is active (Windows only)
titleButtonCloseBgActiveOver: titleButtonCloseBgOver; // custom window title close button background with mouse over when window is active (Windows only)
titleButtonCloseFgActiveOver: titleButtonCloseFgOver; // custom window title close button icon with mouse over when window is active (Windows only)
titleFg: #acacac; // custom window title text when window is inactive (macOS only)
titleFgActive: #3e3c3e; // custom window title text when window is active (macOS only)

// tray icon
trayCounterBg: #f23c34; // tray icon counter background
trayCounterBgMute: #888888; // tray icon counter background if all unread messages are muted
trayCounterFg: #ffffff; // tray icon counter text
trayCounterBgMacInvert: #ffffff; // tray icon counter background when tray icon is pressed or when dark theme of macOS is used (macOS only)
trayCounterFgMacInvert: #ffffff01; // tray icon counter text when tray icon is pressed or when dark theme of macOS is used (macOS only)

// layers
layerBg: #0000007f; // box and main menu background layer fade

cancelIconFg: menuIconFg; // default for settings close icon and box search cancel icon
cancelIconFgOver: menuIconFgOver; // default for settings close icon and box search cancel icon with mouse over

// boxes
boxBg: windowBg; // box background
boxTextFg: windowFg; // box text
boxTextFgGood: #4ab44a; // accepted box text (like when choosing username that is not occupied)
boxTextFgError: #d84d4d; // rejecting box text (like when choosing username that is occupied)
boxTitleFg: #404040; // box title text
boxSearchBg: boxBg; // box search field background (like in contacts box)

boxTitleAdditionalFg: #808080; // box title additional text (like in create group box when you see chosen members count)
boxTitleCloseFg: cancelIconFg; // settings close icon and box search cancel icon (like in contacts box)
boxTitleCloseFgOver: cancelIconFgOver; // settings close icon and box search cancel icon (like in contacts box) with mouse over

//boxSearchCancelIconFg: cancelIconFg; // search cancel X button icon (like in contacts box) (not implemented yet)
//boxSearchCancelIconFgOver: cancelIconFgOver; // search cancel X button icon with mouse over (not implemented yet)

membersAboutLimitFg: windowSubTextFgOver; // text in channel members box about the limit (max 200 last members are shown)

contactsBg: windowBg; // contacts (and some other) box row background
contactsBgOver: windowBgOver; // contacts (and some other) box row background with mouse over
contactsNameFg: boxTextFg; // contacts (and some other) box row name text
contactsStatusFg: windowSubTextFg; // contacts (and some other) box row additional text (like last seen stamp)
contactsStatusFgOver: windowSubTextFgOver; // contacts (and some other) box row additional text (like last seen stamp) with mouse over
contactsStatusFgOnline: windowActiveTextFg; // contacts (and some other) box row active additional text (like online status)

photoCropFadeBg: layerBg; // avatar crop box fade background (when choosing a new photo in Settings or for a group)
photoCropPointFg: #ffffff7f; // avatar crop box corner rectangles (when choosing a new photo in Settings or for a group)

callArrowFg: #2ab32a | boxTextFgGood; // received phone call arrow (in calls list box)
callArrowMissedFg: #dd5b4a | boxTextFgError; // missed phone call arrow (in calls list box)

// intro
introBg: windowBg; // login background
introTitleFg: windowBoldFg; // login title text
introDescriptionFg: windowSubTextFg; // login description text
introErrorFg: windowSubTextFg; // login error text (like when providing a wrong log in code)

introCoverTopBg: #0f89d0; // intro gradient top (from)
introCoverBottomBg: #39b0f0; // intro gradient bottom (to)
introCoverIconsFg: #5ec6ff; // intro cloud graphics
introCoverPlaneTrace: #5ec6ff69; // intro plane traces
introCoverPlaneInner: #c6d8e8; // intro plane part
introCoverPlaneOuter: #a1bed4; // intro plane part
introCoverPlaneTop: #ffffff; // intro plane part

// dialogs
dialogsMenuIconFg: menuIconFg; // main menu and lock telegram icon
dialogsMenuIconFgOver: menuIconFgOver; // main menu and lock telegram icon with mouse over

dialogsBg: windowBg; // chat list background
dialogsNameFg: windowBoldFg; // chat list name text
dialogsChatIconFg: dialogsNameFg; // chat list group or channel icon
dialogsDateFg: windowSubTextFg; // chat list date text
dialogsTextFg: windowSubTextFg; // chat list message text
dialogsTextFgService: windowActiveTextFg; // chat list group sender name text (or media message type text)
dialogsDraftFg: #dd4b39; // chat list draft label
dialogsVerifiedIconBg: windowBgActive; // chat list verified icon background
dialogsVerifiedIconFg: windowFgActive; // chat list verified icon check
dialogsSendingIconFg: #c1c1c1; // chat list sending message icon (clock)
dialogsSentIconFg: #5dc452; // chat list sent message tick / double tick icon
dialogsUnreadBg: windowBgActive; // chat list unread badge background for not muted chat
dialogsUnreadBgMuted: #bbbbbb; // chat list unread badge background for muted chat
dialogsUnreadFg: windowFgActive; // chat list unread badge text

dialogsBgOver: windowBgOver; // chat list background with mouse over
dialogsNameFgOver: windowBoldFgOver; // chat list name text with mouse over
dialogsChatIconFgOver: dialogsNameFgOver; // chat list group or channel icon with mouse over
dialogsDateFgOver: windowSubTextFgOver; // chat list date text with mouse over
dialogsTextFgOver: windowSubTextFgOver; // chat list message text with mouse over
dialogsTextFgServiceOver: dialogsTextFgService; // chat list group sender name text with mouse over
dialogsDraftFgOver: dialogsDraftFg; // chat list draft label with mouse over
dialogsVerifiedIconBgOver: dialogsVerifiedIconBg; // chat list verified icon background with mouse over
dialogsVerifiedIconFgOver: dialogsVerifiedIconFg; // chat list verified icon check with mouse over
dialogsSendingIconFgOver: dialogsSendingIconFg; // chat list sending message icon (clock) with mouse over
dialogsSentIconFgOver: dialogsSentIconFg; // chat list sent message tick / double tick icon with mouse over
dialogsUnreadBgOver: dialogsUnreadBg; // chat list unread badge background for not muted chat with mouse over
dialogsUnreadBgMutedOver: dialogsUnreadBgMuted; // chat list unread badge background for muted chat with mouse over
dialogsUnreadFgOver: dialogsUnreadFg; // chat list unread badge text with mouse over

dialogsBgActive: #419fd9; // chat list background for current (active) chat
dialogsNameFgActive: windowFgActive; // chat list name text for current (active) chat
dialogsChatIconFgActive: dialogsNameFgActive; // chat list group or channel icon for current (active) chat
dialogsDateFgActive: windowFgActive; // chat list date text for current (active) chat
dialogsTextFgActive: windowFgActive; // chat list message text for current (active) chat
dialogsTextFgServiceActive: dialogsTextFgActive; // chat list group sender name text for current (active) chat
dialogsDraftFgActive: #c6e1f7; // chat list draft label for current (active) chat
dialogsVerifiedIconBgActive: dialogsTextFgActive; // chat list verified icon background for current (active) chat
dialogsVerifiedIconFgActive: dialogsBgActive; // chat list verified icon check for current (active) chat
dialogsSendingIconFgActive: #ffffff99; // chat list sending message icon (clock) for current (active) chat
dialogsSentIconFgActive: dialogsTextFgActive; // chat list sent message tick / double tick icon for current (active) chat
dialogsUnreadBgActive: dialogsTextFgActive; // chat list unread badge background for not muted chat for current (active) chat
dialogsUnreadBgMutedActive: dialogsDraftFgActive; // chat list unread badge background for muted chat for current (active) chat
dialogsUnreadFgActive: dialogsBgActive; // chat list unread badge text for current (active) chat

dialogsRippleBg: windowBgRipple; // chat list background ripple effect
dialogsRippleBgActive: activeButtonBgRipple; // chat list background ripple effect for current (active) chat

dialogsForwardBg: dialogsBgActive; // forwarding panel background (when forwarding messages in the smallest window size)
dialogsForwardFg: dialogsNameFgActive; // forwarding panel text (when forwarding messages in the smallest window size)

searchedBarBg: windowBgOver; // search results bar background (in chats list, contacts box..)
searchedBarFg: windowSubTextFgOver; // search results bar text (in chats list, contacts box..)

// history
topBarBg: windowBg; // top bar background (in chat view, media overview..)

emojiPanBg: windowBg; // emoji panel background
emojiPanCategories: #f7f7f7 | windowBg; // emoji panel categories background
emojiPanHeaderFg: windowSubTextFg; // emoji panel section header text
emojiPanHeaderBg: #fffffff2 | emojiPanBg; // emoji panel section header background
emojiIconFg: checkboxFg; // emoji category icon
emojiIconFgActive: windowBgActive; // active emoji category icon
stickerPanDeleteBg: #000000cc; // delete X button background for custom sent stickers in stickers panel (legacy)
stickerPanDeleteFg: windowFgActive; // delete X button icon for custom sent stickers in stickers panel (legacy)
stickerPreviewBg: #ffffffb0; // sticker and GIF preview background (when you press and hold on a sticker)

historyTextInFg: windowFg; // inbox message text
historyTextInFgSelected: historyTextInFg; // inbox message selected text or text in a selected message
historyTextOutFg: windowFg; // outbox message text
historyTextOutFgSelected: historyTextOutFg; // outbox message selected text or text in a selected message
historyLinkInFg: windowActiveTextFg; // inbox message link
historyLinkInFgSelected: historyLinkInFg; // inbox message link in a selected text or message
historyLinkOutFg: windowActiveTextFg; // outbox message link
historyLinkOutFgSelected: historyLinkOutFg; // outbox message link in a selected text or message
historyFileNameInFg: historyTextInFg; // inbox media filename text
historyFileNameInFgSelected: historyFileNameInFg; // inbox media filename text in a selected message
historyFileNameOutFg: historyTextOutFg; // outbox media filename text
historyFileNameOutFgSelected: historyFileNameOutFg; // outbox media filename text in a selected message
historyOutIconFg: dialogsSentIconFg; // outbox message tick / double tick icon
historyOutIconFgSelected: #4da79f; // outbox message tick / double tick icon in a selected message
historyIconFgInverted: windowFgActive; // media message tick / double tick icon (like in sent photo)
historySendingOutIconFg: #98d292; // outbox sending message icon (clock)
historySendingInIconFg: #a0adb5; // inbox sending message icon (clock) (like in sent messages to yourself or in sent messages to a channel)
historySendingInvertedIconFg: #ffffffc8; // media sending message icon (clock) (like in sent photo)
historyCallArrowInFg: callArrowFg; // received phone call arrow
historyCallArrowInFgSelected: callArrowFg; // received phone call arrow in a selected message
historyCallArrowMissedInFg: callArrowMissedFg; // missed phone call arrow
historyCallArrowMissedInFgSelected: callArrowMissedFg; // missed phone call arrow in a selected message
historyCallArrowOutFg: historyCallArrowInFg; // outgoing phone call arrow
historyCallArrowOutFgSelected: historyCallArrowInFgSelected; // outgoing phone call arrow

historyUnreadBarBg: #fcfbfa; // new unread messages bar background
historyUnreadBarBorder: shadowFg; // new unread messages bar shadow
historyUnreadBarFg: #538bb4; // new unread messages bar text

historyForwardChooseBg: #0000004c; // forwarding messages in a large window size "choose recipient" background
historyForwardChooseFg: windowFgActive; // forwarding messages in a large window size "choose recipient" text

historyPeer1NameFg: #c03d33; // red group member name
historyPeer1NameFgSelected: historyPeer1NameFg; // red group member name in a selected message
historyPeer1UserpicBg: #e17076; // red userpic background
historyPeer2NameFg: #4fad2d; // green group member name
historyPeer2NameFgSelected: historyPeer2NameFg; // green group member name in a selected message
historyPeer2UserpicBg: #7bc862; // green userpic background
historyPeer3NameFg: #d09306; // yellow group member name
historyPeer3NameFgSelected: historyPeer3NameFg; // yellow group member name in a selected message
historyPeer3UserpicBg: #e5ca77; // yellow userpic background
historyPeer4NameFg: windowActiveTextFg; // blue group member name
historyPeer4NameFgSelected: historyPeer4NameFg; // blue group member name in a selected message
historyPeer4UserpicBg: #65aadd; // blue userpic background
historyPeer5NameFg: #8544d6; // purple group member name
historyPeer5NameFgSelected: historyPeer5NameFg; // purple group member name in a selected message
historyPeer5UserpicBg: #a695e7; // purple userpic background
historyPeer6NameFg: #cd4073; // pink group member name
historyPeer6NameFgSelected: historyPeer6NameFg; // pink group member name in a selected message
historyPeer6UserpicBg: #ee7aae; // pink userpic background
historyPeer7NameFg: #2996ad; // sea group member name
historyPeer7NameFgSelected: historyPeer7NameFg; // sea group member name in a selected message
historyPeer7UserpicBg: #6ec9cb; // sea userpic background
historyPeer8NameFg: #ce671b; // orange group member name
historyPeer8NameFgSelected: historyPeer8NameFg; // orange group member name in a selected message
historyPeer8UserpicBg: #faa774; // orange userpic background
historyPeerUserpicFg: windowFgActive; // default userpic initials

// Some values are marked as (adjusted), it means they're adjusted by
// hue and saturation of the average background color if user chooses
// some other (not bundled to this color theme) background. If the
// bundled background is used those colors are not adjusted in any way.
historyScrollBarBg: #517c417a; // scroll bar current rectangle, the bar itself in the chat view (adjusted)
historyScrollBarBgOver: #517c41bc; // scroll bar current rectangle with mouse over it in the chat view (adjusted)
historyScrollBg: #517c414c; // scroll bar background (adjusted)
historyScrollBgOver: #517c416b; // scroll bar background with mouse over the scroll bar (adjusted)

msgInBg: windowBg; // inbox message background
msgInBgSelected: #c2dcf2; // inbox selected message background (and background of selected text in those messages)
msgOutBg: #effdde; // outbox message background
msgOutBgSelected: #b7dbdb; // outbox selected message background (and background of selected text in those messages)
msgSelectOverlay: #358cd44c; // overlay which is filling the media parts of selected messages (like in selected photo message)
msgStickerOverlay: #358cd47f; // overlay which is filling the selected sticker message
msgInServiceFg: windowActiveTextFg; // inbox message information text (like information about a forwarded message original sender)
msgInServiceFgSelected: windowActiveTextFg; // inbox selected message information text (like information about a forwarded message original sender)
msgOutServiceFg: #3a8e26; // outbox message information text (like information about a forwarded message original sender)
msgOutServiceFgSelected: #367570; // outbox message information text (like information about a forwarded message original sender)
msgInShadow: #748ea229; // inbox message shadow (below the bubble)
msgInShadowSelected: #548dbb29; // inbox selected message shadow (below the bubble)
msgOutShadow: #3ac34740; // outbox message shadow (below the bubble)
msgOutShadowSelected: #37a78e40; // outbox selected message shadow (below the bubble)
msgInDateFg: #a0acb6; // inbox message time text
msgInDateFgSelected: #6a9cc5; // inbox selected message time text
msgOutDateFg: #6cc264; // outbox message time text
msgOutDateFgSelected: #50a79c; // outbox selected message time text
msgServiceFg: windowFgActive; // service message text (like date dividers or service message about the group title being changed)
msgServiceBg: #517c417f; // service message background (like in a service message about group title being changed) (adjusted)
msgServiceBgSelected: #96b38ba2; // service message selected text background (like in a service message about group title being changed) (adjusted)
msgInReplyBarColor: activeLineFg; // inbox message reply outline
msgInReplyBarSelColor: activeLineFg; // inbox selected message reply outline
msgOutReplyBarColor: historyOutIconFg; // outbox message reply outline
msgOutReplyBarSelColor: historyOutIconFgSelected; // outbox selected message reply outline
msgImgReplyBarColor: msgServiceFg; // sticker message reply outline
msgInMonoFg: #4e7391; // inbox message monospace text (like a message sent with \`test\` text)
msgOutMonoFg: #469165; // outbox message monospace text
msgInMonoFgSelected: msgInMonoFg; // inbox message monospace text in a selected text or message
msgOutMonoFgSelected: msgOutMonoFg; // outbox message monospace text in a selected text or message
msgDateImgFg: msgServiceFg; // media message time text (like time text in a sent photo)
msgDateImgBg: #00000054; // media message time bubble background (like time bubble in a sent photo) or file with thumbnail download icon circle background
msgDateImgBgOver: #00000074; // media message download icon circle background with mouse over (like file with thumbnail download icon)
msgDateImgBgSelected: #1c4a7187; // selected media message time bubble background

msgFileThumbLinkInFg: lightButtonFg; // inbox media file message with thumbnail download / open with button text
msgFileThumbLinkInFgSelected: lightButtonFgOver; // inbox selected media file message with thumbnail download / open with button text
msgFileThumbLinkOutFg: #5eba5b; // outbox media file message with thumbnail download / open with button text
msgFileThumbLinkOutFgSelected: #31a298; // outbox selected media file message with thumbnail download / open with button text
msgFileInBg: windowBgActive; // inbox audio file download circle background
msgFileInBgOver: #4eade3; // inbox audio file download circle background with mouse over
msgFileInBgSelected: #51a3d3; // inbox selected audio file download circle background
msgFileOutBg: #78c67f; // outbox audio file download circle background
msgFileOutBgOver: #6bc272; // outbox audio file download circle background with mouse over
msgFileOutBgSelected: #5fb389; // outbox selected audio file download circle background

msgFile1Bg: #72b1df; // blue shared links / files without image square thumbnail
msgFile1BgDark: #5c9ece; // blue shared files without image download circle background
msgFile1BgOver: #5294c4; // blue shared files without image download circle background with mouse over
msgFile1BgSelected: #5099d0; // blue shared files without image download circle background if file is selected
msgFile2Bg: #61b96e; // green shared links / shared files without image square thumbnail
msgFile2BgDark: #4da859; // green shared files without image download circle background
msgFile2BgOver: #44a050; // green shared files without image download circle background with mouse over
msgFile2BgSelected: #46a07e; // green shared files without image download circle background if file is selected
msgFile3Bg: #e47272; // red shared links / shared files without image square thumbnail
msgFile3BgDark: #cd5b5e; // red shared files without image download circle background
msgFile3BgOver: #c35154; // red shared files without image download circle background with mouse over
msgFile3BgSelected: #9f6a82; // red shared files without image download circle background if file is selected
msgFile4Bg: #efc274; // yellow shared links / shared files without image square thumbnail
msgFile4BgDark: #e6a561; // yellow shared files without image download circle background
msgFile4BgOver: #dc9c5a; // yellow shared files without image download circle background with mouse over
msgFile4BgSelected: #b19d84; // yellow shared files without image download circle background if file is selected

historyFileInIconFg: msgInBg; // inbox file without thumbnail (like audio file) download arrow icon
historyFileInIconFgSelected: msgInBgSelected; // inbox selected file without thumbnail (like audio file) download arrow icon
historyFileInRadialFg: historyFileInIconFg; // inbox file without thumbnail (like audio file) radial download animation line
historyFileInRadialFgSelected: historyFileInIconFgSelected; // inbox selected file without thumbnail (like audio file) radial download animation line
historyFileOutIconFg: msgOutBg; // outbox file without thumbnail (like audio file) download arrow icon
historyFileOutIconFgSelected: msgOutBgSelected; // outbox selected file without thumbnail (like audio file) download arrow icon
historyFileOutRadialFg: historyFileOutIconFg; // outbox file without thumbnail (like audio file) radial download animation line
historyFileOutRadialFgSelected: historyFileOutIconFgSelected; // outbox selected file without thumbnail (like audio file) radial download animation line
historyFileThumbIconFg: msgInBg; // file with thumbnail (or photo / video) download arrow icon
historyFileThumbIconFgSelected: msgInBgSelected; // selected file with thumbnail (or photo / video) download arrow icon
historyFileThumbRadialFg: historyFileThumbIconFg; // file with thumbnail (or photo / video) radial download animation line
historyFileThumbRadialFgSelected: historyFileThumbIconFgSelected; // selected file with thumbnail (or photo / video) radial download animation line

historyVideoMessageProgressFg: historyFileThumbIconFg; // radial playback progress in round video messages

msgWaveformInActive: windowBgActive; // inbox voice message active waveform lines (like played part of currently playing voice message)
msgWaveformInActiveSelected: #51a3d3; // inbox selected voice message active waveform lines (like played part of currently playing voice message)
msgWaveformInInactive: #d4dee6; // inbox voice message inactive waveform lines (like upcoming part of currently playing voice message)
msgWaveformInInactiveSelected: #9cc1e1; // inbox selected voice message inactive waveform lines (like upcoming part of currently playing voice message)
msgWaveformOutActive: #78c67f; // outbox voice message active waveform lines (like played part of currently playing voice message)
msgWaveformOutActiveSelected: #6badad; // outbox selected voice message active waveform lines (like played part of currently playing voice message)
msgWaveformOutInactive: #b3e2b4; // outbox voice message inactive waveform lines (like upcoming part of currently playing voice message)
msgWaveformOutInactiveSelected: #91c3c3; // outbox selected voice message inactive waveform lines (like upcoming part of currently playing voice message)

msgBotKbOverBgAdd: #ffffff20; // this is painted over a bot inline keyboard button (which has msgServiceBg background) when mouse is over that button
msgBotKbIconFg: msgServiceFg; // bot inline keyboard button icon in the top-right corner (like in @vote bot when a poll is ready to be shared)
msgBotKbRippleBg: #00000020; // bot inline keyboard button ripple effect

mediaInFg: msgInDateFg; // inbox media message status text (like in file that is being downloaded)
mediaInFgSelected: msgInDateFgSelected; // inbox selected media message status text (like in file that is being downloaded)
mediaOutFg: msgOutDateFg; // outbox media message status text (like in file that is being downloaded)
mediaOutFgSelected: msgOutDateFgSelected; // outbox selected media message status text (like in file that is being downloaded)

youtubePlayIconBg: #e83131c8; // youtube play icon background (when a link to a youtube video with a webpage preview is sent)
youtubePlayIconFg: windowFgActive; // youtube play icon arrow (when a link to a youtube video with a webpage preview is sent)
videoPlayIconBg: #0000007f; // other video play icon background (like when a link to a vimeo video with a webpage preview is sent)
videoPlayIconFg: #ffffff; // other video play icon arrow (like when a link to a vimeo video with a webpage preview is sent)
toastBg: #000000b2; // toast notification background (like when you click on your t.me link when editing your username)
toastFg: windowFgActive; // toast notification text (like when you click on your t.me link when editing your username)

reportSpamBg: emojiPanHeaderBg; // report spam panel background (like a non contact user writes your for the first time)
reportSpamFg: windowFg; // report spam panel text (when you send a report from that panel)

historyToDownBg: windowBg; // arrow button background (to scroll to the end of the viewed chat)
historyToDownBgOver: windowBgOver; // arrow button background with mouse over
historyToDownBgRipple: windowBgRipple; // arrow button ripple effect
historyToDownFg: menuIconFg; // arrow button icon
historyToDownFgOver: menuIconFgOver; // arrow button icon with mouse over
historyToDownShadow: #00000040; // arrow button shadow

historyComposeAreaBg: msgInBg; // history compose area background (message write area / reply information / forwarding information)
historyComposeAreaFg: historyTextInFg; // history compose area text
historyComposeAreaFgService: msgInDateFg; // history compose area text when replying to a media message
historyComposeIconFg: menuIconFg; // history compose area icon (like emoji, attach, bot command..)
historyComposeIconFgOver: menuIconFgOver; // history compose area icon with mouse over
historySendIconFg: windowBgActive; // send message icon
historySendIconFgOver: windowBgActive; // send message icon with mouse over
historyPinnedBg: historyComposeAreaBg; // pinned message area background
historyReplyBg: historyComposeAreaBg; // reply / forward / edit message area background
historyReplyIconFg: windowBgActive; // reply / forward / edit message left icon
historyReplyCancelFg: cancelIconFg; // reply / forward / edit message cancel button
historyReplyCancelFgOver: cancelIconFgOver; // reply / forward / edit message cancel button with mouse over

historyComposeButtonBg: historyComposeAreaBg; // unblock / join channel / mute channel button background
historyComposeButtonBgOver: windowBgOver; // unblock / join channel / mute channel button background with mouse over
historyComposeButtonBgRipple: windowBgRipple; // unblock / join channel / mute channel button ripple effect

// overview
overviewCheckBg: #00000040; // shared media / files / links checkbox background for not selected rows when some rows are selected
overviewCheckBgActive: windowBgActive; // shared media / files / links checkbox background for selected rows
overviewCheckBorder: windowBg; // shared media round checkbox border
overviewCheckFg: windowBg; // shared files / links checkbox icon for not selected rows when some rows are selected
overviewCheckFgActive: windowBg; // shared files / links checkbox icon for selected rows
overviewPhotoSelectOverlay: #40ace333; // shared photos / videos / links fill for selected rows

// profile
profileStatusFgOver: #7c99b2; // group members list in group profile user last seen text with mouse over
profileVerifiedCheckBg: windowBgActive; // profile verified check icon background
profileVerifiedCheckFg: windowFgActive; // profile verified check icon tick
profileAdminStartFg: windowBgActive; // group members list creator star icon
profileAdminStarFgOver: profileAdminStartFg; // group members list creator star icon with mouse over
profileOtherAdminStarFg: windowSubTextFg; // group members list admin star icon
profileOtherAdminStarFgOver: profileStatusFgOver; // group members list admin star icon with mouse over

// settings
notificationsBoxMonitorFg: windowFg; // custom notifications settings box monitor color
notificationsBoxScreenBg: dialogsBgActive; // #6389a8; // custom notifications settings box monitor screen background

notificationSampleUserpicFg: windowBgActive; // custom notifications settings box small sample userpic placeholder
notificationSampleCloseFg: #d7d7d7 | windowSubTextFg; // custom notifications settings box small sample close button placeholder
notificationSampleTextFg: #d7d7d7 | windowSubTextFg; // custom notifications settings box small sample text placeholder
notificationSampleNameFg: #939393 | windowSubTextFg; // custom notifications settings box small sample name placeholder

changePhoneSimcardFrom: notificationSampleTextFg; // change phone number box left simcard icon
changePhoneSimcardTo: notificationSampleNameFg; // change phone number box right simcard and plane icons

mainMenuBg: windowBg; // main menu background
mainMenuCoverBg: dialogsBgActive; // main menu top cover background
mainMenuCoverFg: windowFgActive; // main menu top cover text
mainMenuCloudFg: activeButtonFg;
mainMenuCloudBg: #2785bf | activeButtonBgRipple;

mediaPlayerBg: windowBg; // audio file player background
mediaPlayerActiveFg: windowBgActive; // audio file player playback progress already played part
mediaPlayerInactiveFg: sliderBgInactive; // audio file player playback progress upcoming (not played yet) part with mouse over
mediaPlayerDisabledFg: #9dd1ef; // audio file player loading progress (when you're playing an audio file and switch to the previous one which is not loaded yet)

// mediaview
mediaviewFileBg: windowBg; // file rectangle background (when you view a png file in Media Viewer and go to a previous, not loaded yet, file)
mediaviewFileNameFg: windowFg; // file name in file rectangle
mediaviewFileSizeFg: windowSubTextFg; // file size text in file rectangle
mediaviewFileRedCornerFg: #d55959; // red file thumbnail placeholder corner in file rectangle (for a file without thumbnail, like .pdf)
mediaviewFileYellowCornerFg: #e8a659; // yellow file thumbnail placeholder corner in file rectangle (for a file without thumbnail, like .zip)
mediaviewFileGreenCornerFg: #49a957; // green file thumbnail placeholder corner in file rectangle (for a file without thumbnail, like .exe)
mediaviewFileBlueCornerFg: #599dcf; // blue file thumbnail placeholder corner in file rectangle (for a file without thumbnail, like .dmg)
mediaviewFileExtFg: activeButtonFg; // file extension text in file thumbnail placeholder in file rectangle

mediaviewMenuBg: #383838; // context menu in Media Viewer background
mediaviewMenuBgOver: #505050; // context menu item background with mouse over
mediaviewMenuBgRipple: #676767; // context menu item ripple effect
mediaviewMenuFg: windowFgActive; // context menu item text

mediaviewBg: #222222eb; // Media Viewer background
mediaviewVideoBg: imageBg; // Media Viewer background when viewing a video in full screen
mediaviewControlBg: #0000003c; // controls background (like next photo / previous photo)
mediaviewControlFg: windowFgActive; // controls icon (like next photo / previous photo)
mediaviewCaptionBg: #11111180; // caption text background (when viewing photo with caption)
mediaviewCaptionFg: mediaviewControlFg; // caption text
mediaviewTextLinkFg: #91d9ff; // caption text link
mediaviewSaveMsgBg: toastBg; // save to file toast message background in Media Viewer
mediaviewSaveMsgFg: toastFg; // save to file toast message text

mediaviewPlaybackActive: #c7c7c7; // video playback progress already played part
mediaviewPlaybackInactive: #252525; // video playback progress upcoming (not played yet) part
mediaviewPlaybackActiveOver: #ffffff; // video playback progress already played part with mouse over
mediaviewPlaybackInactiveOver: #474747; // video playback progress upcoming (not played yet) part with mouse over
mediaviewPlaybackProgressFg: #ffffffc7; // video playback progress text
mediaviewPlaybackIconFg: mediaviewPlaybackActive; // video playback controls icon
mediaviewPlaybackIconFgOver: mediaviewPlaybackActiveOver; // video playback controls icon with mouse over
mediaviewTransparentBg: #ffffff; // transparent filling part (when viewing a transparent .png file in Media Viewer)
mediaviewTransparentFg: #cccccc; // another transparent filling part

// notification
notificationBg: windowBg; // custom notification window background

// calls
callBg: #26282cf2; // phone call popup background
callNameFg: #ffffff; // phone call popup name text
callFingerprintBg: #00000066; // phone call popup emoji fingerprint background
callStatusFg: #aaabac; // phone call popup status text
callIconFg: #ffffff; // phone call popup answer, hangup and mute mic icon
callAnswerBg: #64c15b; // phone call popup answer button background
callAnswerRipple: #52b149; // phone call popup answer button ripple effect
callAnswerBgOuter: #50eb4126; // phone call popup answer button outer ripple effect
callHangupBg: #d75a5a; // phone call popup hangup button background
callHangupRipple: #c04646; // phone call popup hangup button ripple effect
callCancelBg: #ffffff; // phone call popup line busy cancel button background
callCancelFg: #777777; // phone call popup line busy cancel button icon
callCancelRipple: #f1f1f1; // phone call popup line busy cancel button ripple effect
callMuteRipple: #ffffff12; // phone call popup mute mic ripple effect

callBarBg: dialogsBgActive; // active phone call bar background
callBarMuteRipple: dialogsRippleBgActive; // active phone call bar mute and hangup button ripple effect
callBarBgMuted: #8f8f8f | dialogsUnreadBgMuted; // phone call bar with muted mic background
callBarUnmuteRipple: #7f7f7f | shadowFg; // phone call bar with muted mic mute and hangup button ripple effect
callBarFg: dialogsNameFgActive; // phone call bar text and icons

importantTooltipBg: toastBg;
importantTooltipFg: toastFg;
importantTooltipFgLink: mediaviewTextLinkFg;
`;


// hanzicards.js    -*- mode: javascript; coding: utf-8 -*-
// version 0.3.1
// Copyright (C) 2003 by Forrest Cahoon (hanziquiz@abstractfactory.org)
//
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.

var Category = new Array("Simplified Hanzi", "Traditional Hanzi", 
                         "Pinyin", "English");

var Qsel_default_index = 0;
var Asel_default_index = 2;

var Deck = new Array(
   new Array(
      new Array( "暗", "暗",  "àn",     "dark"),
      new Array( "北", "北",  "běi",    "north"),
      new Array( "茶", "茶",  "chá",    "tea"),
      new Array( "长", "長",  "cháng",  "long"),
      new Array( "车", "車",  "chē",    "vehicle"),
      new Array( "橙", "橙",  "chéng",   "orange"),
      new Array( "吃", "吃",  "chī",    "eat"),
      new Array( "大", "大",  "dà",     "big"),
      new Array( "电", "電",  "diàn",   "electric"),
      new Array( "东", "東",  "dōng",   "east"),
      new Array( "短", "短",  "duǎn",   "short"),
      new Array( "风", "風",  "fēng",   "wind"),
      new Array( "狗", "狗",  "gǒu",    "dog"),
      new Array( "好", "好",  "hǎo",    "good"),
      new Array( "黑", "黑",  "hēi",    "black"),
      new Array( "红", "紅",  "hóng",   "red"),
      new Array( "坏", "壞",  "huài",   "bad, broken"),
      new Array( "火", "火",  "huǒ",    "fire"),
      new Array( "家", "家",  "jiā",    "home"),
      new Array( "江", "江",  "jiāng",  "river"),
      new Array( "看", "看",  "kàn",    "look"),
      new Array( "蓝", "藍",  "lán",    "blue"),
      new Array( "老", "老",  "lǎo",    "old"),
      new Array( "雷", "雷",  "léi",    "thunder"),
      new Array( "妈", "媽",  "mā",     "mother"),
      new Array( "马", "馬",  "mǎ",     "horse"),
      new Array( "猫", "貓",  "māo",    "cat"),
      new Array( "门", "門",  "mén",    "door, gate"),
      new Array( "明", "明",  "míng",   "bright"),
      new Array( "南", "南",  "nán",    "south"),
      new Array( "男", "男",  "nán",    "male"),
      new Array( "能", "能",  "néng",   "to be able"),
      new Array( "你", "你",  "nǐ",     "you"),
      new Array( "女", "女",  "nǚ",     "female"),
      new Array( "人", "人",  "rén",    "person"),
      new Array( "日", "日",  "rì",     "sun"),
      new Array( "肉", "肉",  "ròu",    "meat, flesh"),
      new Array( "山", "山",  "shān",   "hill, mountain"),
      new Array( "上", "上",  "shàng",  "above, up, towards"),
      new Array( "水", "水",  "shuǐ",   "water"),
      new Array( "他", "他",  "tā",     "he, him"),
      new Array( "她", "她",  "tā",     "she, her"),
      new Array( "天", "天",  "tiān",   "day, sky, heaven"),
      new Array( "我", "我",  "wǒ",     "I,me"),
      new Array( "西", "西",  "xī",     "west"),
      new Array( "下", "下",  "xià",    "down"),
      new Array( "小", "小",  "xiǎo",   "small"),
      new Array( "谢", "謝",  "xiè",    "thank"),
      new Array( "心", "心",  "xīn",    "heart"),
      new Array( "要", "要",  "yào",    "want"),
      new Array( "有", "有",  "yǒu",    "have"),
      new Array( "月", "月",  "yuè",    "moon, month"),
      new Array( "再", "再",  "zài",    "again"),
      new Array( "在", "在",  "zài",    "at"),
      new Array( "中", "中",  "zhōng",  "middle")
   ),
   new Array(
      new Array( "聪明", "聰明",  "cōng míng",   "intelligent"),
      new Array( "电话", "電話",  "diàn huà",    "telephone"),
      new Array( "电视", "電視",  "diàn shì",    "television"),
      new Array( "东西", "東西",  "dōng xī",     "thing"),
      new Array( "法国", "法國",  "fǎ guó",      "France"),
      new Array( "房子", "房子",  "fáng zi",      "house, building"),
      new Array( "非常", "非常",  "fēi cháng",   "extraordinary"),
      new Array( "飞机", "飛機",  "fēi jī",      "airplane"),
      new Array( "高兴", "高興",  "gāo xìng",    "happy"),
      new Array( "公司", "公司",  "gōng sī",     "company, corporation"),
      new Array( "公园", "公園",  "gōng yuán",   "park"),
      new Array( "火车", "火車",  "huǒ chē",     "train"),
      new Array( "结婚", "結婚",  "jié hūn",     "marry"),
      new Array( "今天", "今天",  "jīn tiān",    "today"),
      new Array( "咖啡", "咖啡",  "kā fēi",      "coffee"),
      new Array( "老虎", "老虎",  "lǎo hǔ",      "tiger"),
      new Array( "美国", "美國",  "měi guó",     "The United States"),
      new Array( "明天", "明天",  "míng tiān",   "tomorrow"),
      new Array( "漂亮", "漂亮",  "piào liàng",  "pretty, handsome"),
      new Array( "苹果", "蘋果",  "píng guǒ",    "apple"),
      new Array( "上班", "上班",  "shàng bān",   "go to work"),
      new Array( "时间", "時間",  "shí jiān",    "time (n.)"),
      new Array( "随便", "隨便",  "suí biàn",    "casual"),
      new Array( "天气", "天氣",  "tiān qì",     "weather"),
      new Array( "下班", "下班",  "xià bān",     "leave work"),
      new Array( "现在", "現在",  "xiàn zài",    "now"),
      new Array( "休息", "休息",  "xiū xi",       "rest (v.)"),
      new Array( "英国", "英國",  "yīng guó",    "England"),
      new Array( "中国", "中國",  "zhōng guó",   "China"),
      new Array( "中文", "中文",  "zhōng wén",   "Chinese language"),
      new Array( "昨天", "昨天",  "zuó tiān",    "yesterday")
   )
);

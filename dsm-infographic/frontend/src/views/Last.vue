<template>
  <div class="last">
    <div class="last-info">
      <div class="last-title">
        <h1>&lt; 마지막으로...{{ getUserContentId }} &gt;</h1>
      </div>
      <div class="last-desc">
        <p>마지막으로 가장 잘한 1위, 2위, 3위 작품을 선정해주시면 평가가 종료됩니다.</p>
      </div>
    </div>
    <div class="last-survey">
      <div class="info-last-1">
        <h2>내가 생각하는 1위</h2>
        <select
          name="last-1"
          v-model="last_1"
        >
          <option
            value=""
            disabled
          >== 선택 ==</option>
          <option value="1"
          :disabled="getUserContentId == '1' || last_3 == '1' || last_2 == '1'">
            [1]지구야! 아프냐?나도 아프다!</option>
          <option value="2"
          :disabled="getUserContentId == '2' || last_3 == '2' || last_2 == '2'">
            [2]밤인데...더워도 너~무 더워!</option>
          <option value="3"
          :disabled="getUserContentId == '3' || last_3 == '3' || last_2 == '3'">
            [3]열대야, 너의 비밀을 파헤쳐주겠어!</option>
          <option value="4"
          :disabled="getUserContentId == '4' || last_3 == '4' || last_2 == '4'">
            [4]탄소발자국! 넌 누구니?</option>
          <option value="5"
          :disabled="getUserContentId == '5' || last_3 == '5' || last_2 == '5'">
            [5]햄버거! 기후변화의 주범?</option>
          <option value="6"
          :disabled="getUserContentId == '6' || last_3 == '6' || last_2 == '6'">
            [6]풀이 있었는데요 없었습니다.</option>
          <option value="7"
          :disabled="getUserContentId == '7' || last_3 == '7' || last_2 == '7'">
            [7]내 지구 내 놔</option>
          <option value="8"
          :disabled="getUserContentId == '8' || last_3 == '8' || last_2 == '8'">
            [8]사라지고 있는 지구의 허파</option>
          <option value="9"
          :disabled="getUserContentId == '9' || last_3 == '9' || last_2 == '9'">
            [9]기후변화가 쏘아올린 작은 공</option>
          <option value="10"
          :disabled="getUserContentId == '10' || last_3 == '10' || last_2 == '10'">
            [10]급식이의 삶</option>
          <option value="11"
          :disabled="getUserContentId == '11' || last_3 == '11' || last_2 == '11'">
            [11]온실가스야, 나만은 널 보내지 못했나봐</option>
          <option value="12"
          :disabled="getUserContentId == '12' || last_3 == '12' || last_2 == '12'">
            [12]기후변화의 원인은?</option>
          <option value="13"
          :disabled="getUserContentId == '13' || last_3 == '13' || last_2 == '13'">
            [13]지구 먹는 아보카도</option>
          <option value="14"
          :disabled="getUserContentId == '14' || last_3 == '14' || last_2 == '14'">
            [14]스마트폰을 사면 고릴라가 죽는다</option>
          <option value="15"
          :disabled="getUserContentId == '15' || last_3 == '15' || last_2 == '15'">
            [15]지구온난화</option>
          <option value="16"
          :disabled="getUserContentId == '16' || last_3 == '16' || last_2 == '16'">
            [16]기후변화 범인을 찾아라</option>
          <option value="17"
          :disabled="getUserContentId == '17' || last_3 == '17' || last_2 == '17'">
            [17]지구를 위한 피부 솔루션</option>
          <option value="18"
          :disabled="getUserContentId == '18' || last_3 == '18' || last_2 == '18'">
            [18]지구온난화의 숨은 범인은?</option>
          <option value="19"
          :disabled="getUserContentId == '19' || last_3 == '19' || last_2 == '19'">
            [19]당신이 모르는 지구 온난화의 영향</option>
          <option value="20"
          :disabled="getUserContentId == '20' || last_3 == '20' || last_2 == '20'">
            [20]봄의 불청객, 황사</option>
          <option value="21"
          :disabled="getUserContentId == '21' || last_3 == '21' || last_2 == '21'">
            [21]Oh My G9</option>
          <option value="22"
          :disabled="getUserContentId == '22' || last_3 == '22' || last_2 == '22'">
            [22]폐 전자 제품이 지구에 미치는 영향</option>
          <option value="23"
          :disabled="getUserContentId == '23' || last_3 == '23' || last_2 == '23'">
            [23]우리에게 다가오는 재앙, 지구온난화</option>
          <option value="24"
          :disabled="getUserContentId == '24' || last_3 == '24' || last_2 == '24'">
            [24]지구온난화, 얼마나 심각한가?</option>
          <option value="25"
          :disabled="getUserContentId == '25' || last_3 == '25' || last_2 == '25'">
            [25]지구가 뜨거워진다고?!</option>
          <option value="26"
          :disabled="getUserContentId == '26' || last_3 == '26' || last_2 == '26'">
            [26]지구온난화의 주범 온실가스 줄이는 방법</option>
          <option value="27"
          :disabled="getUserContentId == '27' || last_3 == '27' || last_2 == '27'">
            [27]지구 온난화 ,미세먼지 너 때문이야</option>
        </select>
      </div>
      <div class="info-last-2">
        <h2>내가 생각하는 2위</h2>
        <select
          name="last-2"
          v-model="last_2"
        >
          <option
            value=""
            disabled
          >== 선택 ==</option>
          <option value="1"
          :disabled="getUserContentId == '1' || last_3 == '1' || last_1 == '1'">
            [1]지구야! 아프냐?나도 아프다!</option>
          <option value="2"
          :disabled="getUserContentId == '2' || last_3 == '2' || last_1 == '2'">
            [2]밤인데...더워도 너~무 더워!</option>
          <option value="3"
          :disabled="getUserContentId == '3' || last_3 == '3' || last_1 == '3'">
            [3]열대야, 너의 비밀을 파헤쳐주겠어!</option>
          <option value="4"
          :disabled="getUserContentId == '4' || last_3 == '4' || last_1 == '4'">
            [4]탄소발자국! 넌 누구니?</option>
          <option value="5"
          :disabled="getUserContentId == '5' || last_3 == '5' || last_1 == '5'">
            [5]햄버거! 기후변화의 주범?</option>
          <option value="6"
          :disabled="getUserContentId == '6' || last_3 == '6' || last_1 == '6'">
            [6]풀이 있었는데요 없었습니다.</option>
          <option value="7"
          :disabled="getUserContentId == '7' || last_3 == '7' || last_1 == '7'">
            [7]내 지구 내 놔</option>
          <option value="8"
          :disabled="getUserContentId == '8' || last_3 == '8' || last_1 == '8'">
            [8]사라지고 있는 지구의 허파</option>
          <option value="9"
          :disabled="getUserContentId == '9' || last_3 == '9' || last_1 == '9'">
            [9]기후변화가 쏘아올린 작은 공</option>
          <option value="10"
          :disabled="getUserContentId == '10' || last_3 == '10' || last_1 == '10'">
            [10]급식이의 삶</option>
          <option value="11"
          :disabled="getUserContentId == '11' || last_3 == '11' || last_1 == '11'">
            [11]온실가스야, 나만은 널 보내지 못했나봐</option>
          <option value="12"
          :disabled="getUserContentId == '12' || last_3 == '12' || last_1 == '12'">
            [12]기후변화의 원인은?</option>
          <option value="13"
          :disabled="getUserContentId == '13' || last_3 == '13' || last_1 == '13'">
            [13]지구 먹는 아보카도</option>
          <option value="14"
          :disabled="getUserContentId == '14' || last_3 == '14' || last_1 == '14'">
            [14]스마트폰을 사면 고릴라가 죽는다</option>
          <option value="15"
          :disabled="getUserContentId == '15' || last_3 == '15' || last_1 == '15'">
            [15]지구온난화</option>
          <option value="16"
          :disabled="getUserContentId == '16' || last_3 == '16' || last_1 == '16'">
            [16]기후변화 범인을 찾아라</option>
          <option value="17"
          :disabled="getUserContentId == '17' || last_3 == '17' || last_1 == '17'">
            [17]지구를 위한 피부 솔루션</option>
          <option value="18"
          :disabled="getUserContentId == '18' || last_3 == '18' || last_1 == '18'">
            [18]지구온난화의 숨은 범인은?</option>
          <option value="19"
          :disabled="getUserContentId == '19' || last_3 == '19' || last_1 == '19'">
            [19]당신이 모르는 지구 온난화의 영향</option>
          <option value="20"
          :disabled="getUserContentId == '20' || last_3 == '20' || last_1 == '20'">
            [20]봄의 불청객, 황사</option>
          <option value="21"
          :disabled="getUserContentId == '21' || last_3 == '21' || last_1 == '21'">
            [21]Oh My G9</option>
          <option value="22"
          :disabled="getUserContentId == '22' || last_3 == '22' || last_1 == '22'">
            [22]폐 전자 제품이 지구에 미치는 영향</option>
          <option value="23"
          :disabled="getUserContentId == '23' || last_3 == '23' || last_1 == '23'">
            [23]우리에게 다가오는 재앙, 지구온난화</option>
          <option value="24"
          :disabled="getUserContentId == '24' || last_3 == '24' || last_1 == '24'">
            [24]지구온난화, 얼마나 심각한가?</option>
          <option value="25"
          :disabled="getUserContentId == '25' || last_3 == '25' || last_1 == '25'">
            [25]지구가 뜨거워진다고?!</option>
          <option value="26"
          :disabled="getUserContentId == '26' || last_3 == '26' || last_1 == '26'">
            [26]지구온난화의 주범 온실가스 줄이는 방법</option>
          <option value="27"
          :disabled="getUserContentId == '27' || last_3 == '27' || last_1 == '27'">
            [27]지구 온난화 ,미세먼지 너 때문이야</option>
        </select>
      </div>
      <div class="info-last-3">
        <h2>내가 생각하는 3위</h2>
        <select
          name="last-3"
          v-model="last_3"
        >
          <option
            value=""
            disabled
          >== 선택 ==</option>
          <option value="1"
          :disabled="getUserContentId == '1' || last_1 == '1' || last_2 == '1'">
            [1]지구야! 아프냐?나도 아프다!</option>
          <option value="2"
          :disabled="getUserContentId == '2' || last_1 == '2' || last_2 == '2'">
            [2]밤인데...더워도 너~무 더워!</option>
          <option value="3"
          :disabled="getUserContentId == '3' || last_1 == '3' || last_2 == '3'">
            [3]열대야, 너의 비밀을 파헤쳐주겠어!</option>
          <option value="4"
          :disabled="getUserContentId == '4' || last_1 == '4' || last_2 == '4'">
            [4]탄소발자국! 넌 누구니?</option>
          <option value="5"
          :disabled="getUserContentId == '5' || last_1 == '5' || last_2 == '5'">
            [5]햄버거! 기후변화의 주범?</option>
          <option value="6"
          :disabled="getUserContentId == '6' || last_1 == '6' || last_2 == '6'">
            [6]풀이 있었는데요 없었습니다.</option>
          <option value="7"
          :disabled="getUserContentId == '7' || last_1 == '7' || last_2 == '7'">
            [7]내 지구 내 놔</option>
          <option value="8"
          :disabled="getUserContentId == '8' || last_1 == '8' || last_2 == '8'">
            [8]사라지고 있는 지구의 허파</option>
          <option value="9"
          :disabled="getUserContentId == '9' || last_1 == '9' || last_2 == '9'">
            [9]기후변화가 쏘아올린 작은 공</option>
          <option value="10"
          :disabled="getUserContentId == '10' || last_1 == '10' || last_2 == '10'">
            [10]급식이의 삶</option>
          <option value="11"
          :disabled="getUserContentId == '11' || last_1 == '11' || last_2 == '11'">
            [11]온실가스야, 나만은 널 보내지 못했나봐</option>
          <option value="12"
          :disabled="getUserContentId == '12' || last_1 == '12' || last_2 == '12'">
            [12]기후변화의 원인은?</option>
          <option value="13"
          :disabled="getUserContentId == '13' || last_1 == '13' || last_2 == '13'">
            [13]지구 먹는 아보카도</option>
          <option value="14"
          :disabled="getUserContentId == '14' || last_1 == '14' || last_2 == '14'">
            [14]스마트폰을 사면 고릴라가 죽는다</option>
          <option value="15"
          :disabled="getUserContentId == '15' || last_1 == '15' || last_2 == '15'">
            [15]지구온난화</option>
          <option value="16"
          :disabled="getUserContentId == '16' || last_1 == '16' || last_2 == '16'">
            [16]기후변화 범인을 찾아라</option>
          <option value="17"
          :disabled="getUserContentId == '17' || last_1 == '17' || last_2 == '17'">
            [17]지구를 위한 피부 솔루션</option>
          <option value="18"
          :disabled="getUserContentId == '18' || last_1 == '18' || last_2 == '18'">
            [18]지구온난화의 숨은 범인은?</option>
          <option value="19"
          :disabled="getUserContentId == '19' || last_1 == '19' || last_2 == '19'">
            [19]당신이 모르는 지구 온난화의 영향</option>
          <option value="20"
          :disabled="getUserContentId == '20' || last_1 == '20' || last_2 == '20'">
            [20]봄의 불청객, 황사</option>
          <option value="21"
          :disabled="getUserContentId == '21' || last_1 == '21' || last_2 == '21'">
            [21]Oh My G9</option>
          <option value="22"
          :disabled="getUserContentId == '22' || last_1 == '22' || last_2 == '22'">
            [22]폐 전자 제품이 지구에 미치는 영향</option>
          <option value="23"
          :disabled="getUserContentId == '23' || last_1 == '23' || last_2 == '23'">
            [23]우리에게 다가오는 재앙, 지구온난화</option>
          <option value="24"
          :disabled="getUserContentId == '24' || last_1 == '24' || last_2 == '24'">
            [24]지구온난화, 얼마나 심각한가?</option>
          <option value="25"
          :disabled="getUserContentId == '25' || last_1 == '25' || last_2 == '25'">
            [25]지구가 뜨거워진다고?!</option>
          <option value="26"
          :disabled="getUserContentId == '26' || last_1 == '26' || last_2 == '26'">
            [26]지구온난화의 주범 온실가스 줄이는 방법</option>
          <option value="27"
          :disabled="getUserContentId == '27' || last_1 == '27' || last_2 == '27'">
            [27]지구 온난화 ,미세먼지 너 때문이야</option>
        </select>
      </div>
      <div class="last-submit-wrap">
        <button
         class="last-submit-button"
         v-on:click="lastSubmit"
        >
          제출하기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'last',
  data() {
    return {
      last_1: '',
      last_2: '',
      last_3: '',
    };
  },
  computed: {
    ...mapGetters(['getSurveyFinish']),
    ...mapGetters(['getUserContentId']),
  },
  methods: {
    ...mapActions(['surveyRanking']),
    ...mapActions(['setNotice']),
    ...mapActions(['setSurveyFinishF']),
    lastSubmit() {
      if (
        this.last_1 === ''
        || this.last_2 === ''
        || this.last_3 === ''
      ) {
        this.setNotice({
          noticeTitle: '제출 실패',
          noticeBody: '아직 모든 문항에 체크하지 않았습니다',
          noticeButton: '확인',
          noticeHeight: '100%',
          noticeDisplay: 'inline-block',
        });
        return;
      }
      this.surveyRanking({
        rank1: this.last_1,
        rank2: this.last_2,
        rank3: this.last_3,
      });
      this.setSurveyFinishF({ surveyFinish: true });
      this.setNotice({
        noticeTitle: '모든 평가 완료',
        noticeBody: '모든 평가를 완료하셨습니다',
        noticeButton: '확인',
        noticeHeight: '100%',
        noticeDisplay: 'inline-block',
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/dsm-infographic/last/last.scss";
</style>

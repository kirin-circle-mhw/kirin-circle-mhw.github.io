members = [
      {"name": "꾸왕", "weapon": "갓손검, 태도, 대검, 헤보, 피리", "complete": false}
    , {"name": "무반동속사", "weapon": "건랜, 킹도, 대검, 슬액", "complete": false}
    , {"name": "snowlady", "weapon": "활(기만자)", "complete": false}
    , {"name": "테이스트오브와일드", "weapon": "조충곤", "complete": false}
    , {"name": "커피물조절장인", "weapon": "란스, 해머, 슬액", "complete": false}
    , {"name": "띠용띠용", "weapon": "건랜, 매미, 해머, 대검", "complete": false}
    , {"name": "진자자", "weapon": "쑌검", "complete": false}
    , {"name": "댈라미", "weapon": "-", "complete": false}
    , {"name": "연휼", "weapon": "머검, 건랜", "complete": false}
    , {"name": "KANTELUV", "weapon": "활, 차액, 슬액, 손검, 해머, 태도", "complete": false}
    , {"name": "혀B", "weapon": "활쟁이", "complete": false}
    , {"name": "PUMPKIN", "weapon": "갓렵킹리, 조충곤", "complete": false}
    , {"name": "루민", "weapon": "예초기, 해머, 태도, 슬액, 피리", "complete": false}
    , {"name": "레나", "weapon": "랜스, 함마", "complete": false}
    , {"name": "배즙먹은상원", "weapon": "-", "complete": false}
];


HashMap = function () {
    this.hash_map = new Array();
};

HashMap.prototype = {
    push: function (value) {
        this.hash_map.push(value);
    },
    get: function (key) {
        return this.hash_map[key];
    },
    put: function (key) {
        val = this.get(key);
        this.hash_map.splice(key, 1);
        return val;
    },
    len: function () {
        return this.hash_map.length;
    }
};

map_members = new HashMap();

team1_member = new HashMap();
team2_member = new HashMap();
team3_member = new HashMap();
team4_member = new HashMap();
team5_member = new HashMap();

wait_member = new HashMap();
wait_member.push('-');

complete_member = [
    [11],
    [9],
    [12],
    [0],
    [1]
];

for (i = 0; i < complete_member.length; i++) {
    for (j = 0; j < complete_member[i].length; j++) {
        if (i === 0) {
            team1_member.push(members[complete_member[i][j]]);
        } else if (i === 1) {
            team2_member.push(members[complete_member[i][j]]);
        } else if (i === 2) {
            team3_member.push(members[complete_member[i][j]]);
        } else if (i === 3) {
            team4_member.push(members[complete_member[i][j]]);
        } else if (i === 4) {
            team5_member.push(members[complete_member[i][j]]);
        }

        members[complete_member[i][j]].complete = true;
    }
}

for (i = 0; i < members.length; i++) {
    if (members[i].complete === false) {
        map_members.push(members[i]);
    }
}

$(document).ready(function () {
    setMemberList();

    let idx = 0;
    let waitFirstClick = true;

    $('.btn_drawing').click(function () {
        let wait_member_len = 0;
        if (map_members.len() == 0) {
            if (wait_member.len() != 0) {
                $('div.btn_area > button.btn_wait').hide();
                // member_list = wait_member;
                wait_member_len = wait_member.len();
                for (i = 0; i < wait_member_len; i++) {
                    map_members.push(wait_member.put(0));
                }
                alert('지금부터 pass된 맴버입니다.');
                $('div#drawingForm > h2').append('<span>( pass됐던 맴버 )</span>')
            } else {
                alert('모든 맴버 추첨이 끝났습니다.');
                return false;
            }
        }

        member_list = map_members;
        idx = Math.floor(Math.random() * member_list.len());
        member = member_list.get(idx);

        $('.draw_member').html('<dt>' + member.name + '</dt><dd>' + member.weapon + '</dd>')
    });

    $('.btn_area > button').click(function () {
        let team = $(this).data('team');

        let team_memeber = new HashMap();
        let max_member = 3;
        switch (team) {
            case 1:
                team_memeber = team1_member;
                break;
            case 2:
                team_memeber = team2_member;
                break;
            case 3:
                team_memeber = team3_member;
                break;
            case 4:
                team_memeber = team4_member;
                break;
            case 5:
                team_memeber = team5_member;
                break;
            case 'wait':
                team_memeber = wait_member;
                max_member = 16;
                if (waitFirstClick) {
                    wait_member.put(0);
                    waitFirstClick = false;
                }
                break;
        }

        if (team_memeber.len() >= max_member) {
            alert('해당 팀 인원이 모두 찼습니다.')
            return false;
        }

        team_memeber.push(map_members.put(idx));
        setMemberList();
    });

    $('#btnStarCardClose').click(function () {
        $('#startCard').hide();
    });
});


function setMemberList() {
    $('.draw_member').html('<dt>-</dt><dd>-</dd>')
    let member_list = new HashMap();

    let member_info;
    let member_tag;

    for (let teamNum = 1; teamNum <= 5; teamNum++) {
        switch (teamNum) {
            case 1:
                member_list = team1_member;
                break;
            case 2:
                member_list = team2_member;
                break;
            case 3:
                member_list = team3_member;
                break;
            case 4:
                member_list = team4_member;
                break;
            case 5:
                member_list = team5_member;
                break;
        }

        $('.team' + teamNum + ' > dl').html('');

        for (i = 0; i < member_list.len(); i++) {
            member_info = member_list.get(i);
            member_tag = '<dd><dl><dt>' + member_info.name + '</dt><dd>' + member_info.weapon + '</dd></dl></dd>'
            $('.team' + teamNum + ' > dl').append(member_tag);
        }
    }
}

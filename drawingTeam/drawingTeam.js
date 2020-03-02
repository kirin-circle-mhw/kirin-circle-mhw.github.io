members = [
    { // 0
        "name": "루민",
        "weapon": "차지액스, 해머, 태도, 슬래시액스, 수렵피리",
        "complete": false
    },
    { // 1
        "name": "꾸왕",
        "weapon": "한손검, 태도, 대검, 헤비보우건, 수렵피리",
        "complete": false
    },
    { // 2
        "name": "무반동속사",
        "weapon": "건랜스, 태도, 대검, 슬래시액스",
        "complete": false
    },
    { // 3
        "name": "snowlady",
        "weapon": "-",
        "complete": false
    },
    { // 4
        "name": "레나",
        "weapon": "-",
        "complete": false
    },
    { // 5
        "name": "테이스트오브와일드",
        "weapon": "조충곤",
        "complete": false
    },
    { // 6
        "name": "커피물조절장인",
        "weapon": "랜스, 해머, 슬래시액스",
        "complete": false
    },
    { // 7
        "name": "띠용띠용",
        "weapon": "-",
        "complete": false
    },
    { // 8
        "name": "진자자",
        "weapon": "-",
        "complete": false
    },
    { // 9
        "name": "댈라미",
        "weapon": "-",
        "complete": false
    },
    { // 10
        "name": "연휼",
        "weapon": "-",
        "complete": false
    },
    { // 11
        "name": "KANTELUV",
        "weapon": "-",
        "complete": false
    },
    { // 12
        "name": "혀B",
        "weapon": "활",
        "complete": false
    },
    { // 13
        "name": "PUMPKIN",
        "weapon": "-",
        "complete": false
    },
    { // 14
        "name": "ssolid",
        "weapon": "-",
        "complete": false
    },
    { // 15
        "name": "톱과젤리",
        "weapon": "건랜스, 한손검",
        "complete": false
    }
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

wait_member = new HashMap();
wait_member.push('-');

complete_member = [
    [],
    [],
    [],
    []
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
        if (map_members.len() == 0) {
            if (wait_member.len() != 0) {
                $('div.btn_area > button.btn_wait').hide();
                // member_list = wait_member;
                for (i = 0; i < wait_member.len(); i++) {
                    map_members.push(wait_member.put(i));
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
        team = $(this).data('team');

        team_memeber = new HashMap();
        max_mamber = 4;
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
            case 'wait':
                team_memeber = wait_member;
                max_mamber = 16;
                if (waitFirstClick) {
                    wait_member.put(0);
                    waitFirstClick = false;
                }
                break;
        }

        if (team_memeber.len() >= max_mamber) {
            alert('해당 팀 인원이 모두 찼습니다.')
            return false;
        }

        team_memeber.push(map_members.put(idx));
        setMemberList();
    });
});


function setMemberList() {
    $('.draw_member').html('<dt>-</dt><dd>-</dd>')
    member_list = new HashMap();

    for (team = 1; team <= 4; team++) {
        switch (team) {
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
        }

        $('.team' + team + ' > dl').html('');

        for (i = 0; i < member_list.len(); i++) {
            member_info = member_list.get(i);
            member_tag = '<dd><dl><dt>' + member_info.name + '</dt><dd>' + member_info.weapon + '</dd></dl></dd>'
            $('.team' + team + ' > dl').append(member_tag);
        }
    }
}

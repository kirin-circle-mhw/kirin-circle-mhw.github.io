members = [
    {
        "name": "루민",
        "weapon": "차지액스, 해머, 태도, 슬래시액스"
    },
    {
        "name": "꾸왕",
        "weapon": "한손검"
    },
    {
        "name": "무반동속사",
        "weapon": "건랜스, 태도, 대검, 슬래시액스"
    },
    {
        "name": "snowlady",
        "weapon": "-"
    },
    {
        "name": "레나",
        "weapon": "-"
    },
    {
        "name": "테이스트오브와일드",
        "weapon": "-"
    },
    {
        "name": "커피물조절장인",
        "weapon": "랜스, 해머, 슬래시액스"
    },
    {
        "name": "띠용띠용",
        "weapon": "-"
    },
    {
        "name": "진자자",
        "weapon": "-"
    },
    {
        "name": "댈라미",
        "weapon": "-"
    },
    {
        "name": "연휼",
        "weapon": "-"
    },
    {
        "name": "KANTELUV",
        "weapon": "-"
    },
    {
        "name": "혀B",
        "weapon": "활"
    },
    {
        "name": "PUMPKIN",
        "weapon": "-"
    },
    {
        "name": "ssolid",
        "weapon": "-"
    },
    {
        "name": "톱과젤리",
        "weapon": "건랜스, 한손검"
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

for (i = 0; i < members.length; i++) {
    map_members.push(members[i]);
}


$(document).ready(function () {
    let idx = 0;
    let waitFirstClick = true;

    $('.btn_drawing').click(function () {
        member_list = map_members;
        if (map_members.len() == 0) {
            if (wait_member.len() != 0) {
                member_list = wait_member;
            }
            alert('모든 맴버 추첨이 끝났습니다.');
            return false;
        }

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
        setMemberList()
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
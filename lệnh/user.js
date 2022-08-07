const  { SlashCommandBuilder }  = request  ( '@ discordjs / builders ' ) ;
const  { MessageEmbed }  = request  ( ' discord.js ' ) ;
mô-đun . xuất khẩu  =  {
    data : new  SlashCommandBuilder ( )
            . setName ( 'người dùng' )
            . setDescription ( 'Trả lời kèm theo thông tin người dùng' ) ,
    không đồng bộ  thực thi ( tương tác )  {
        const  nhúng  =  new  MessageEmbed ( )
                . setColor ( '# 00FF00' )
                . setTitle ( 'Thông tin người dùng' )
                . setAuthor ( {  name : 'Maverick Wings' ,  icon_url : 'https://i.imgur.com/uTTspNt.png' ,  url : 'https://discord.gg/WkQjzDT'  } )
                . setThumbnail ( 'https://i.imgur.com/uTTspNt.png' )
                . setDescription ( 'Đây là thông tin về bạn \ n \ n' )
                . addFields (
                     {  name : 'Tên người dùng' ,  giá trị : ` $ { tương tác . người dùng . tag } ` } ,
                     {  name : 'ID' ,  value : ` $ { tương tác . người dùng . id } `  } ,
                     {  name : 'Created' ,  value : ` $ { tương tác . người dùng . đã tạoAt } `  } ,
                 )
                 . setImage ( ` $ { tương tác . người dùng . avatarURL ( {  format : 'png' ,  dynamic : true ,  size : 1024  } ) } ' )
                 . setTimestamp ( )
                . setFooter ( {  text : 'Made by: @ ZRX # 0001' ,  icon_url : 'https://i.imgur.com/uTTspNt.png'  } )
    chờ đợi  sự tương tác . trả lời ( {  nhúng : [ nhúng ]  } ) ;
    } ,
} ;
/ *
chờ đợi tương tác.reply (`Tên người dùng: $ {tương tác.user.tag} \ n ID người dùng: $ {tương tác.user.id} \ nUser Bot: $ {tương tác.user.bot} ');
    console.log (`$ {tương tác.user.createAt}`);
}, * /

package com.nowcoder.community.dao;

import com.nowcoder.community.entity.User;
import org.apache.ibatis.annotations.Mapper;

/**
 * @author hc
 * @version 1.0
 */
@Mapper
public interface UserMapper {

    User selectById(int id);

    User selectByName(String usename);

    User selectByEmail(String email);

    int insertUser(User user);

    int updateStatus(int id,int status);

    int updateHeader(int id, String headerUrl);

    int updatePassword(int id, String password);

}

package com.nowcoder.community.dao;

import com.nowcoder.community.entity.DiscussPost;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author hc
 * @version 1.0
 */
@Mapper
public interface DiscussPostMapper {

    List<DiscussPost> selectDiscussPosts(int userId, int offset, int limit);

    //@param 用于给参数取别名
    //如果只有一个参数，并且在<if>里使用，则必须添加别名
    int selectDiscussPostRows(@Param("userId") int userId);


}

package com.iurac.recruit.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.iurac.recruit.entity.ChatMessage;
import org.apache.ibatis.annotations.Param;

/**
 * @Entity com.iurac.recruit.entity.ChatMessage
 */
public interface ChatMessageMapper extends BaseMapper<ChatMessage> {

    IPage<ChatMessage> getChatMessageByCondition(Page<ChatMessage> page,
                                                 @Param("linkId") String linkId, @Param("usernameA") String usernameA,
                                                 @Param("usernameB") String usernameB, @Param("content") String content,
                                                 @Param("startDate") String startDate, @Param("endDate") String endDate);

}





package com.iurac.recruit.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.iurac.recruit.entity.ChatLink;
import org.apache.ibatis.annotations.Param;

/**
 * @Entity com.iurac.recruit.entity.ChatLink
 */
public interface ChatLinkMapper extends BaseMapper<ChatLink> {

    IPage<ChatLink> getChatLinkByCondition(Page<ChatLink> page, @Param("username") String username,
                                           @Param("startDate") String startDate, @Param("endDate") String endDate);
}





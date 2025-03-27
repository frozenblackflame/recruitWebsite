package com.iurac.recruit.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.iurac.recruit.entity.Resume;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author iurac
 * @since 2021-06-03
 */
public interface ResumeMapper extends BaseMapper<Resume> {

    List<Resume> getByCondition(@Param("skipCount") long skipCount, @Param("limit") Long limit, @Param("username") String username);

    Long getCountByCondition(@Param("username") String username);
}

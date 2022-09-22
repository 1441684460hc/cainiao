package com.nowcoder.community.dao;

/**
 * @author hc
 * @version 1.0
 */
public class AlphaDaoHibernateImpl implements AlphaDao{
    @Override
    public String select() {
        return "hibernate";
    }
}

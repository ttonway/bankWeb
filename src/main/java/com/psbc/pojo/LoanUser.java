package com.psbc.pojo;

public class LoanUser {
    private Long loanid;

    // ����
    private String usernm;
    // ��ϵ�ֻ�
    private String phonenum;
    // ����֧��
    private String area;
    private String bank;
    // �Ƽ�����Ϣ
    private String referrals;

    private Integer id;

    private Integer loanNum;

    private String workunit;

    private String createtime;
    //����ϵ ��0�� ����� ��1�� ����� ��2�� �Ѳ��� ��3�� ������ ��4��
    private String status;

    private String remark;

    private String updatetime;

    private String utmsrc;

    public Long getLoanid() {
        return loanid;
    }

    public void setLoanid(Long loanid) {
        this.loanid = loanid;
    }

    public String getUsernm() {
        return usernm;
    }

    public void setUsernm(String usernm) {
        this.usernm = usernm;
    }

    public String getPhonenum() {
        return phonenum;
    }

    public void setPhonenum(String phonenum) {
        this.phonenum = phonenum;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getBank() {
        return bank;
    }

    public void setBank(String bank) {
        this.bank = bank;
    }

    public String getReferrals() {
        return referrals;
    }

    public void setReferrals(String referrals) {
        this.referrals = referrals;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getLoanNum() {
        return loanNum;
    }

    public void setLoanNum(Integer loanNum) {
        this.loanNum = loanNum;
    }

    public String getWorkunit() {
        return workunit;
    }

    public void setWorkunit(String workunit) {
        this.workunit = workunit;
    }

    public String getCreatetime() {
        return createtime;
    }

    public void setCreatetime(String createtime) {
        this.createtime = createtime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getUpdatetime() {
        return updatetime;
    }

    public void setUpdatetime(String updatetime) {
        this.updatetime = updatetime;
    }

    public String getUtmsrc() {
        return utmsrc;
    }

    public void setUtmsrc(String utmsrc) {
        this.utmsrc = utmsrc;
    }


}
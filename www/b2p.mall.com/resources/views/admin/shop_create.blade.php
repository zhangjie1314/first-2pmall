@extends('admin.layouts.master')

@section('header-style')

@stop

@section('content')
<div class="page-content">
    <!-- /section:settings.box -->
    <div class="page-header">
        <h1>
            新增店铺
            <small>
                <i class="ace-icon fa fa-angle-double-right"></i>
                新增店铺基础数据
            </small>
        </h1>
    </div><!-- /.page-header -->

    <div class="row">
        <div class="col-xs-12 form-horizontal">
            <!-- PAGE CONTENT BEGINS -->
            <form role="form" id="validation-form" method="post" action="{{action('Admin\ShopController@postStore')}}">
                <!-- #section:elements.form -->
                <div class="form-group">
                    <label class="col-sm-2 control-label no-padding-right" for="goods_name"> 店铺名称 </label>

                    <div class="col-sm-10">
                        <div class="clearfix">
                            <input type="text" id="goods_name" name="name" placeholder="店铺名称" class="col-xs-5"/>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-2 control-label no-padding-right" for="goods_desc"> 别称 </label>

                    <div class="col-sm-10">
                        <div class="clearfix">
                            <input type="text" id="goods_desc" name="alias" placeholder="别称" class="col-xs-5" />
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-2 control-label no-padding-right" for="goods_desc"> 地址 </label>

                    <div class="col-sm-10">
                        <div class="clearfix">
                            <input type="text" id="goods_desc" name="address" placeholder="地址" class="col-xs-5" />
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-2 control-label no-padding-right" for="market_price"> 当前状态 </label>

                    <div class="col-sm-10">
                        <div class="clearfix">
                            <select name="status">
                                <option value="1" >开店</option>
                                <option value="0" >闭店</option>
                            </select>
                        </div>
                    </div>
                </div>

            <!-- /section:elements.form -->
            <div class="space-4"></div>

            <div class="clearfix form-actions">
                <div class="col-md-offset-3 col-md-9">
                    <button class="btn btn-info" type="submit" name="submit_from">
                        <i class="ace-icon fa fa-check bigger-110"></i>
                        提交
                    </button>

                </div>
            </div>
            </form>
        </div><!-- /.row -->
    </div>
</div><!-- /.page-content -->
@stop

@section('footer-script')

@stop
